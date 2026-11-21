// API simulada de la demo de turnos.
// En un proyecto real estas funciones llaman a un backend (Node/Supabase); acá guardan en localStorage
// con una pequeña demora para que la interfaz se comporte igual que con un servidor de verdad.

export type Servicio = { id: string; nombre: string; duracion: number; precio: number }
export type Barbero = { id: string; nombre: string; especialidad: string }
export type Estado = 'pendiente' | 'atendido' | 'cancelado'
export type Turno = {
	id: string
	servicioId: string
	barberoId: string
	fecha: string // YYYY-MM-DD
	hora: string // HH:MM
	cliente: string
	telefono: string
	estado: Estado
}

type DB = { servicios: Servicio[]; barberos: Barbero[]; turnos: Turno[]; dia: string }

const KEY = 'demo-barberia-v1'
export const HORARIOS = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30']

export const fechaISO = (d: Date) =>
	`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

export const proximosDias = (n = 10) => {
	const out: Date[] = []
	const d = new Date()
	while (out.length < n) {
		if (d.getDay() !== 0) out.push(new Date(d)) // domingos cerrado
		d.setDate(d.getDate() + 1)
	}
	return out
}

function seed(): DB {
	const servicios: Servicio[] = [
		{ id: 'corte', nombre: 'Corte clásico', duracion: 30, precio: 9000 },
		{ id: 'fade', nombre: 'Corte fade', duracion: 30, precio: 11000 },
		{ id: 'barba', nombre: 'Barba y perfilado', duracion: 30, precio: 7000 },
		{ id: 'combo', nombre: 'Corte + barba', duracion: 30, precio: 15000 },
	]
	const barberos: Barbero[] = [
		{ id: 'nico', nombre: 'Nico', especialidad: 'Fades y diseños' },
		{ id: 'lean', nombre: 'Lean', especialidad: 'Clásicos y barba' },
		{ id: 'fran', nombre: 'Fran', especialidad: 'Cortes modernos' },
	]
	const dias = proximosDias(3).map(fechaISO)
	const nombres = ['Juan M.', 'Matías R.', 'Lucas G.', 'Tomás P.', 'Agustín F.', 'Bruno L.', 'Santi D.', 'Facu C.', 'Ezequiel V.']
	const turnos: Turno[] = []
	let i = 0
	for (const fecha of dias) {
		for (const [j, hora] of ['10:30', '11:30', '15:00', '16:30', '18:00', '19:00'].entries()) {
			if ((i + j) % 3 === 2) continue
			turnos.push({
				id: `T${1000 + i}`,
				servicioId: servicios[(i + j) % 4].id,
				barberoId: barberos[(i + j) % 3].id,
				fecha, hora,
				cliente: nombres[i % nombres.length],
				telefono: `11 5${String(100 + i).padStart(3, '0')}-${String(2000 + i * 37).slice(0, 4)}`,
				estado: 'pendiente',
			})
			i++
		}
	}
	return { servicios, barberos, turnos, dia: fechaISO(new Date()) }
}

let memory: DB | null = null
function load(): DB {
	const hoy = fechaISO(new Date())
	if (memory && memory.dia === hoy) return memory
	try {
		const raw = localStorage.getItem(KEY)
		const db = raw ? (JSON.parse(raw) as DB) : null
		if (db && db.dia === hoy) return (memory = db) // la demo se regenera cada día
	} catch { /* sin storage: se usa memoria */ }
	memory = seed()
	save(memory)
	return memory
}
function save(db: DB) {
	memory = db
	try { localStorage.setItem(KEY, JSON.stringify(db)) } catch { /* ignorar */ }
}

const latency = <T,>(value: T) => new Promise<T>((r) => setTimeout(() => r(structuredClone(value)), 250 + Math.random() * 300))

// ---- "endpoints" ----
export const api = {
	getServicios: () => latency(load().servicios),
	getBarberos: () => latency(load().barberos),

	// GET /disponibilidad?fecha=&barbero=
	getDisponibilidad(fecha: string, barberoId: string) {
		const db = load()
		const ocupados = new Set(db.turnos.filter((t) => t.fecha === fecha && t.barberoId === barberoId && t.estado !== 'cancelado').map((t) => t.hora))
		const ahora = new Date()
		const esHoy = fecha === fechaISO(ahora)
		const libres = HORARIOS.filter((h) => {
			if (ocupados.has(h)) return false
			if (!esHoy) return true
			const [hh, mm] = h.split(':').map(Number)
			return hh * 60 + mm > ahora.getHours() * 60 + ahora.getMinutes() + 30
		})
		return latency(libres)
	},

	// POST /turnos
	crearTurno(datos: Omit<Turno, 'id' | 'estado'>) {
		const db = load()
		const tomado = db.turnos.some((t) => t.fecha === datos.fecha && t.hora === datos.hora && t.barberoId === datos.barberoId && t.estado !== 'cancelado')
		if (tomado) return Promise.reject(new Error('Ese horario se acaba de ocupar, elegí otro.'))
		const turno: Turno = { ...datos, id: `T${Date.now().toString().slice(-5)}`, estado: 'pendiente' }
		db.turnos.push(turno)
		save(db)
		return latency(turno)
	},

	// GET /turnos?fecha=
	getTurnos: (fecha: string) => latency(load().turnos.filter((t) => t.fecha === fecha).sort((a, b) => a.hora.localeCompare(b.hora))),

	// PATCH /turnos/:id
	cambiarEstado(id: string, estado: Estado) {
		const db = load()
		const t = db.turnos.find((x) => x.id === id)
		if (t) t.estado = estado
		save(db)
		return latency(t)
	},

	// PATCH /servicios/:id
	cambiarPrecio(id: string, precio: number) {
		const db = load()
		const s = db.servicios.find((x) => x.id === id)
		if (s) s.precio = precio
		save(db)
		return latency(s)
	},

	reiniciar() {
		save(seed())
		return latency(true)
	},
}

export const pesos = (n: number) => '$' + n.toLocaleString('es-AR')
