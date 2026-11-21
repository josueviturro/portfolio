import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import DemoBar from '../DemoBar'
import { api, fechaISO, pesos, proximosDias, type Barbero, type Estado, type Servicio, type Turno } from './api'
import './SistemaDemo.css'

const BASE = '/demo/sistema'
const DIAS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
const fechaLarga = (iso: string) =>
	new Date(iso + 'T12:00').toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' })

/* ---------------- Reserva (cliente) ---------------- */
function Reservar() {
	const [servicios, setServicios] = useState<Servicio[]>([])
	const [barberos, setBarberos] = useState<Barbero[]>([])
	const [paso, setPaso] = useState(1)
	const [servicio, setServicio] = useState<Servicio | null>(null)
	const [barbero, setBarbero] = useState<Barbero | null>(null)
	const [fecha, setFecha] = useState(fechaISO(proximosDias(1)[0]))
	const [hora, setHora] = useState('')
	const [libres, setLibres] = useState<string[] | null>(null)
	const [enviando, setEnviando] = useState(false)
	const [error, setError] = useState('')
	const [confirmado, setConfirmado] = useState<Turno | null>(null)
	const dias = useMemo(() => proximosDias(10), [])

	useEffect(() => {
		api.getServicios().then(setServicios)
		api.getBarberos().then(setBarberos)
	}, [])

	useEffect(() => {
		if (!barbero) return
		let vivo = true
		setLibres(null)
		setHora('')
		api.getDisponibilidad(fecha, barbero.id).then((l) => vivo && setLibres(l))
		return () => { vivo = false }
	}, [fecha, barbero])

	const confirmar = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const f = new FormData(e.currentTarget)
		const cliente = String(f.get('cliente')).trim()
		const telefono = String(f.get('telefono')).trim()
		if (cliente.length < 2 || telefono.replace(/\D/g, '').length < 8) {
			setError('Ingresá tu nombre y un teléfono válido.')
			return
		}
		setError('')
		setEnviando(true)
		try {
			const t = await api.crearTurno({ servicioId: servicio!.id, barberoId: barbero!.id, fecha, hora, cliente, telefono })
			setConfirmado(t)
			setPaso(4)
		} catch (err) {
			setError((err as Error).message)
			setPaso(2)
		} finally {
			setEnviando(false)
		}
	}

	const reiniciar = () => {
		setPaso(1); setServicio(null); setBarbero(null); setHora(''); setConfirmado(null)
	}

	return (
		<div className="bb-wrap bb-book">
			<div className="bb-intro">
				<h1>Reservá tu turno</h1>
				<p>Elegí servicio, barbero y horario. Te confirmamos al instante.</p>
			</div>

			<ol className="bb-steps" aria-label="Pasos">
				{['Servicio', 'Día y hora', 'Tus datos', 'Listo'].map((s, i) => (
					<li key={s} className={paso === i + 1 ? 'on' : paso > i + 1 ? 'done' : ''}><span>{i + 1}</span>{s}</li>
				))}
			</ol>

			{paso === 1 && (
				<div className="bb-grid bb-grid-2">
					{servicios.length === 0 && <p className="bb-loading">Cargando servicios…</p>}
					{servicios.map((s) => (
						<button key={s.id} className={`bb-option${servicio?.id === s.id ? ' sel' : ''}`} onClick={() => { setServicio(s); setPaso(2) }}>
							<strong>{s.nombre}</strong>
							<span>{s.duracion} min</span>
							<em>{pesos(s.precio)}</em>
						</button>
					))}
				</div>
			)}

			{paso === 2 && (
				<div className="bb-panel">
					<h2>Barbero</h2>
					<div className="bb-grid bb-grid-3">
						{barberos.map((b) => (
							<button key={b.id} className={`bb-option bb-barber${barbero?.id === b.id ? ' sel' : ''}`} onClick={() => setBarbero(b)}>
								<span className="bb-avatar">{b.nombre[0]}</span>
								<strong>{b.nombre}</strong>
								<span>{b.especialidad}</span>
							</button>
						))}
					</div>

					{barbero && (
						<>
							<h2>Día</h2>
							<div className="bb-days">
								{dias.map((d) => {
									const iso = fechaISO(d)
									return (
										<button key={iso} className={`bb-day${fecha === iso ? ' sel' : ''}`} onClick={() => setFecha(iso)}>
											<span>{DIAS[d.getDay()]}</span>
											<strong>{d.getDate()}</strong>
										</button>
									)
								})}
							</div>

							<h2>Horario</h2>
							{libres === null ? (
								<p className="bb-loading">Buscando horarios disponibles…</p>
							) : libres.length === 0 ? (
								<p className="bb-empty">No quedan horarios para este día. Probá con otro.</p>
							) : (
								<div className="bb-hours">
									{libres.map((h) => (
										<button key={h} className={`bb-hour${hora === h ? ' sel' : ''}`} onClick={() => setHora(h)}>{h}</button>
									))}
								</div>
							)}
						</>
					)}

					{error && <p className="bb-error">{error}</p>}
					<div className="bb-nav">
						<button className="bb-btn bb-btn-ghost" onClick={() => setPaso(1)}>← Cambiar servicio</button>
						<button className="bb-btn" disabled={!hora} onClick={() => { setError(''); setPaso(3) }}>Continuar</button>
					</div>
				</div>
			)}

			{paso === 3 && (
				<form className="bb-panel bb-form" onSubmit={confirmar}>
					<div className="bb-summary">
						<div><span>Servicio</span><strong>{servicio?.nombre}</strong></div>
						<div><span>Barbero</span><strong>{barbero?.nombre}</strong></div>
						<div><span>Cuándo</span><strong>{fechaLarga(fecha)} · {hora} h</strong></div>
						<div><span>Total</span><strong>{pesos(servicio?.precio ?? 0)}</strong></div>
					</div>
					<label>Nombre<input name="cliente" placeholder="Tu nombre" autoComplete="name" /></label>
					<label>Teléfono (WhatsApp)<input name="telefono" placeholder="11 1234-5678" inputMode="tel" autoComplete="tel" /></label>
					{error && <p className="bb-error">{error}</p>}
					<div className="bb-nav">
						<button type="button" className="bb-btn bb-btn-ghost" onClick={() => setPaso(2)}>← Volver</button>
						<button type="submit" className="bb-btn" disabled={enviando}>{enviando ? 'Reservando…' : 'Confirmar turno'}</button>
					</div>
				</form>
			)}

			{paso === 4 && confirmado && (
				<div className="bb-panel bb-done">
					<span className="bb-check">✓</span>
					<h2>¡Turno confirmado!</h2>
					<p>{confirmado.cliente}, te esperamos el <strong>{fechaLarga(confirmado.fecha)}</strong> a las <strong>{confirmado.hora} h</strong> con {barbero?.nombre}.</p>
					<p className="bb-code">Código de reserva: <strong>{confirmado.id}</strong></p>
					<p className="bb-hint">En un sistema real, acá le llega un recordatorio por WhatsApp o email. Entrá al <Link to={`${BASE}/admin`}>panel del negocio</Link> para ver tu turno en la agenda.</p>
					<button className="bb-btn" onClick={reiniciar}>Reservar otro turno</button>
				</div>
			)}
		</div>
	)
}

/* ---------------- Panel (negocio) ---------------- */
function Admin() {
	const [logueado, setLogueado] = useState(false)
	const [pin, setPin] = useState('')
	const [pinError, setPinError] = useState(false)
	const [servicios, setServicios] = useState<Servicio[]>([])
	const [barberos, setBarberos] = useState<Barbero[]>([])
	const [fecha, setFecha] = useState(fechaISO(proximosDias(1)[0]))
	const [turnos, setTurnos] = useState<Turno[] | null>(null)
	const [precios, setPrecios] = useState<Record<string, string>>({})
	const [guardado, setGuardado] = useState('')
	const dias = useMemo(() => proximosDias(7), [])

	const cargarTurnos = (f = fecha) => { setTurnos(null); api.getTurnos(f).then(setTurnos) }

	useEffect(() => {
		if (!logueado) return
		api.getServicios().then((s) => { setServicios(s); setPrecios(Object.fromEntries(s.map((x) => [x.id, String(x.precio)]))) })
		api.getBarberos().then(setBarberos)
	}, [logueado])

	useEffect(() => { if (logueado) cargarTurnos(fecha) }, [fecha, logueado]) // eslint-disable-line react-hooks/exhaustive-deps

	const entrar = (e: FormEvent) => {
		e.preventDefault()
		if (pin === '1234') setLogueado(true)
		else setPinError(true)
	}

	const cambiarEstado = async (id: string, estado: Estado) => {
		setTurnos((ts) => ts && ts.map((t) => (t.id === id ? { ...t, estado } : t))) // actualización optimista
		await api.cambiarEstado(id, estado)
	}

	const guardarPrecio = async (id: string) => {
		const n = parseInt(precios[id], 10)
		if (!n || n < 0) return
		await api.cambiarPrecio(id, n)
		setServicios((ss) => ss.map((s) => (s.id === id ? { ...s, precio: n } : s)))
		setGuardado(id)
		setTimeout(() => setGuardado(''), 1500)
	}

	const reiniciar = async () => {
		await api.reiniciar()
		const s = await api.getServicios()
		setServicios(s)
		setPrecios(Object.fromEntries(s.map((x) => [x.id, String(x.precio)])))
		cargarTurnos()
	}

	if (!logueado) {
		return (
			<div className="bb-wrap bb-login">
				<form className="bb-panel" onSubmit={entrar}>
					<h1>Panel del negocio</h1>
					<p>Acceso solo para el dueño y los barberos.</p>
					<label>PIN de acceso<input value={pin} onChange={(e) => { setPin(e.target.value); setPinError(false) }} type="password" inputMode="numeric" placeholder="••••" autoFocus /></label>
					{pinError && <p className="bb-error">PIN incorrecto.</p>}
					<button className="bb-btn" type="submit">Ingresar</button>
					<p className="bb-hint">Demo: el PIN es <strong>1234</strong></p>
				</form>
			</div>
		)
	}

	const nombreServicio = (id: string) => servicios.find((s) => s.id === id)
	const nombreBarbero = (id: string) => barberos.find((b) => b.id === id)?.nombre ?? id
	const activos = turnos?.filter((t) => t.estado !== 'cancelado') ?? []
	const atendidos = turnos?.filter((t) => t.estado === 'atendido') ?? []
	const facturado = atendidos.reduce((acc, t) => acc + (nombreServicio(t.servicioId)?.precio ?? 0), 0)
	const estimado = activos.reduce((acc, t) => acc + (nombreServicio(t.servicioId)?.precio ?? 0), 0)

	return (
		<div className="bb-wrap bb-admin">
			<div className="bb-admin-head">
				<div>
					<h1>Agenda</h1>
					<p>{fechaLarga(fecha)}</p>
				</div>
				<button className="bb-btn bb-btn-ghost" onClick={reiniciar}>Restablecer demo</button>
			</div>

			<div className="bb-days">
				{dias.map((d) => {
					const iso = fechaISO(d)
					return (
						<button key={iso} className={`bb-day${fecha === iso ? ' sel' : ''}`} onClick={() => setFecha(iso)}>
							<span>{DIAS[d.getDay()]}</span>
							<strong>{d.getDate()}</strong>
						</button>
					)
				})}
			</div>

			<div className="bb-stats">
				<div><span>Turnos</span><strong>{turnos ? activos.length : '–'}</strong></div>
				<div><span>Atendidos</span><strong>{turnos ? atendidos.length : '–'}</strong></div>
				<div><span>Facturado</span><strong>{pesos(facturado)}</strong></div>
				<div><span>Estimado del día</span><strong>{pesos(estimado)}</strong></div>
			</div>

			<div className="bb-panel bb-table-wrap">
				{turnos === null ? (
					<p className="bb-loading">Cargando turnos…</p>
				) : turnos.length === 0 ? (
					<p className="bb-empty">No hay turnos para este día.</p>
				) : (
					<table className="bb-table">
						<thead>
							<tr><th>Hora</th><th>Cliente</th><th>Servicio</th><th>Barbero</th><th>Estado</th><th></th></tr>
						</thead>
						<tbody>
							{turnos.map((t) => (
								<tr key={t.id} className={t.estado}>
									<td data-label="Hora"><strong>{t.hora}</strong></td>
									<td data-label="Cliente">{t.cliente}<small>{t.telefono}</small></td>
									<td data-label="Servicio">{nombreServicio(t.servicioId)?.nombre}</td>
									<td data-label="Barbero">{nombreBarbero(t.barberoId)}</td>
									<td data-label="Estado"><span className={`bb-pill ${t.estado}`}>{t.estado}</span></td>
									<td className="bb-actions">
										{t.estado === 'pendiente' ? (
											<>
												<button className="bb-mini ok" onClick={() => cambiarEstado(t.id, 'atendido')}>Atendido</button>
												<button className="bb-mini no" onClick={() => cambiarEstado(t.id, 'cancelado')}>Cancelar</button>
											</>
										) : (
											<button className="bb-mini" onClick={() => cambiarEstado(t.id, 'pendiente')}>Deshacer</button>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>

			<div className="bb-panel">
				<h2>Servicios y precios</h2>
				<p className="bb-hint">Los cambios se ven al instante en la página de reservas.</p>
				<div className="bb-prices">
					{servicios.map((s) => (
						<div key={s.id} className="bb-price-row">
							<span>{s.nombre}</span>
							<div>
								<span className="bb-peso">$</span>
								<input value={precios[s.id] ?? ''} inputMode="numeric" onChange={(e) => setPrecios({ ...precios, [s.id]: e.target.value.replace(/\D/g, '') })} aria-label={`Precio de ${s.nombre}`} />
								<button className="bb-mini ok" onClick={() => guardarPrecio(s.id)}>{guardado === s.id ? '✓ Guardado' : 'Guardar'}</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

/* ---------------- Layout ---------------- */
export default function SistemaDemo() {
	return (
		<div className="bb">
			<DemoBar service="sistema de turnos" pageTitle="Barbería Filo · Turnos online" />
			<header className="bb-header">
				<div className="bb-wrap bb-header-row">
					<Link to={BASE} className="bb-logo">FILO<span>barbería</span></Link>
					<nav>
						<NavLink to={BASE} end>Reservar</NavLink>
						<NavLink to={`${BASE}/admin`}>Panel del negocio</NavLink>
					</nav>
				</div>
			</header>
			<main>
				<Routes>
					<Route index element={<Reservar />} />
					<Route path="admin" element={<Admin />} />
					<Route path="*" element={<Reservar />} />
				</Routes>
			</main>
			<footer className="bb-footer">© 2026 Barbería Filo · Negocio ficticio de demostración · Los datos se guardan solo en tu navegador</footer>
		</div>
	)
}
