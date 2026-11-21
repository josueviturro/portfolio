import { useState, type FormEvent } from 'react'
import { NavLink, Link, Routes, Route } from 'react-router-dom'
import DemoBar from '../DemoBar'
import './InstitucionalDemo.css'

const BASE = '/demo/institucional'

const servicios = [
	{ icon: '📊', title: 'Contabilidad mensual', text: 'Registración, balances y estados contables al día para que tomes decisiones con números reales.', items: ['Libros contables', 'Balances anuales', 'Informes de gestión'] },
	{ icon: '🧾', title: 'Impuestos', text: 'Liquidación de IVA, Ganancias, Ingresos Brutos y Bienes Personales, sin sorpresas ni multas.', items: ['Declaraciones juradas', 'Planificación fiscal', 'Planes de pago'] },
	{ icon: '👥', title: 'Sueldos y RR.HH.', text: 'Liquidación de haberes, cargas sociales y altas y bajas de personal.', items: ['Recibos de sueldo', 'F.931', 'Convenios colectivos'] },
	{ icon: '🚀', title: 'Monotributo y emprendedores', text: 'Te acompañamos desde la inscripción hasta la recategorización, para que solo te ocupes de vender.', items: ['Alta y recategorización', 'Facturación electrónica', 'Asesoramiento inicial'] },
	{ icon: '🏢', title: 'Sociedades', text: 'Constitución de SAS y SRL, actas, libros societarios y trámites ante la IGJ.', items: ['Constitución', 'Libros digitales', 'Asambleas'] },
	{ icon: '💼', title: 'Consultoría', text: 'Costos, precios, flujo de fondos y armado de presupuestos para que tu empresa crezca ordenada.', items: ['Costos y márgenes', 'Flujo de caja', 'Presupuestos'] },
]

const equipo = [
	{ ini: 'LR', name: 'Laura Ríos', role: 'Contadora Pública · Socia fundadora', bio: '20 años asesorando pymes y comercios.' },
	{ ini: 'DM', name: 'Diego Méndez', role: 'Contador Público · Socio', bio: 'Especialista en impuestos y sociedades.' },
	{ ini: 'VS', name: 'Valeria Sosa', role: 'Lic. en RR.HH.', bio: 'A cargo de sueldos y legajos.' },
	{ ini: 'TP', name: 'Tomás Paz', role: 'Analista contable', bio: 'Atención de monotributistas y emprendedores.' },
]

function Inicio() {
	return (
		<>
			<section className="inst-hero">
				<div className="inst-wrap">
					<span className="inst-eyebrow">Estudio contable · Buenos Aires</span>
					<h1>Tus números en orden,<br />tu negocio en crecimiento.</h1>
					<p>Asesoramos a pymes, comercios y profesionales en contabilidad, impuestos y sueldos, con atención personalizada y respuesta en 24 h.</p>
					<div className="inst-actions">
						<Link to={`${BASE}/contacto`} className="inst-btn inst-btn-primary">Pedir una reunión</Link>
						<Link to={`${BASE}/servicios`} className="inst-btn inst-btn-outline">Ver servicios</Link>
					</div>
				</div>
			</section>

			<section className="inst-stats inst-wrap">
				<div><strong>+20</strong><span>años de experiencia</span></div>
				<div><strong>350</strong><span>clientes activos</span></div>
				<div><strong>24 h</strong><span>tiempo de respuesta</span></div>
				<div><strong>100%</strong><span>trámites online</span></div>
			</section>

			<section className="inst-section inst-wrap">
				<h2>¿En qué te podemos ayudar?</h2>
				<div className="inst-cards inst-cards-3">
					{servicios.slice(0, 3).map((s) => (
						<article key={s.title} className="inst-card">
							<span className="inst-card-icon">{s.icon}</span>
							<h3>{s.title}</h3>
							<p>{s.text}</p>
						</article>
					))}
				</div>
				<p className="inst-center"><Link to={`${BASE}/servicios`} className="inst-link">Ver todos los servicios →</Link></p>
			</section>

			<section className="inst-cta">
				<div className="inst-wrap">
					<h2>¿Arrancás con tu monotributo?</h2>
					<p>La primera consulta es sin cargo. Te explicamos todo en lenguaje simple.</p>
					<Link to={`${BASE}/contacto`} className="inst-btn inst-btn-light">Quiero asesorarme</Link>
				</div>
			</section>
		</>
	)
}

function Servicios() {
	return (
		<section className="inst-section inst-wrap">
			<span className="inst-eyebrow">Servicios</span>
			<h1 className="inst-page-title">Soluciones contables para cada etapa</h1>
			<div className="inst-cards inst-cards-3">
				{servicios.map((s) => (
					<article key={s.title} className="inst-card">
						<span className="inst-card-icon">{s.icon}</span>
						<h3>{s.title}</h3>
						<p>{s.text}</p>
						<ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
					</article>
				))}
			</div>
		</section>
	)
}

function Nosotros() {
	return (
		<section className="inst-section inst-wrap">
			<span className="inst-eyebrow">Nosotros</span>
			<h1 className="inst-page-title">Un estudio cercano, con experiencia</h1>
			<div className="inst-about">
				<p>Ríos &amp; Asociados nació en 2005 con una idea simple: que cualquier comercio o profesional tenga el mismo nivel de asesoramiento que una gran empresa. Hoy acompañamos a más de 350 clientes con un equipo interdisciplinario y procesos 100% digitales.</p>
				<div className="inst-values">
					<div><h3>Claridad</h3><p>Te explicamos cada número sin tecnicismos.</p></div>
					<div><h3>Compromiso</h3><p>Vencimientos controlados, nunca te enterás tarde.</p></div>
					<div><h3>Cercanía</h3><p>Un contador asignado que conoce tu negocio.</p></div>
				</div>
			</div>
			<h2>Nuestro equipo</h2>
			<div className="inst-cards inst-cards-4">
				{equipo.map((p) => (
					<article key={p.name} className="inst-card inst-person">
						<span className="inst-avatar">{p.ini}</span>
						<h3>{p.name}</h3>
						<span className="inst-role">{p.role}</span>
						<p>{p.bio}</p>
					</article>
				))}
			</div>
		</section>
	)
}

function Contacto() {
	const [sent, setSent] = useState(false)
	const [error, setError] = useState('')

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = new FormData(e.currentTarget)
		if (!String(data.get('nombre')).trim() || !String(data.get('email')).includes('@') || !String(data.get('mensaje')).trim()) {
			setError('Completá nombre, un email válido y tu consulta.')
			return
		}
		setError('')
		setSent(true)
	}

	return (
		<section className="inst-section inst-wrap inst-contact">
			<div>
				<span className="inst-eyebrow">Contacto</span>
				<h1 className="inst-page-title">Hablemos de tu negocio</h1>
				<p>Dejanos tu consulta y te respondemos en menos de 24 horas hábiles.</p>
				<ul className="inst-contact-data">
					<li>📍 Av. Ejemplo 1234, piso 3, Buenos Aires</li>
					<li>📞 (011) 0000-0000</li>
					<li>✉️ contacto@estudio-ejemplo.com.ar</li>
					<li>🕘 Lunes a viernes de 9 a 18 h</li>
				</ul>
			</div>
			{sent ? (
				<div className="inst-form inst-sent">
					<span>✅</span>
					<h3>¡Consulta enviada!</h3>
					<p>En tu web, este mensaje te llega directo a tu email y al cliente le aparece esta confirmación.</p>
					<button className="inst-btn inst-btn-outline" onClick={() => setSent(false)}>Enviar otra</button>
				</div>
			) : (
				<form className="inst-form" onSubmit={onSubmit} noValidate>
					<label>Nombre y apellido<input name="nombre" placeholder="Juan Pérez" /></label>
					<label>Email<input name="email" type="email" placeholder="juan@email.com" /></label>
					<label>Teléfono (opcional)<input name="tel" placeholder="11 1234-5678" /></label>
					<label>Servicio
						<select name="servicio" defaultValue="">
							<option value="" disabled>Elegí una opción</option>
							{servicios.map((s) => <option key={s.title}>{s.title}</option>)}
						</select>
					</label>
					<label>Consulta<textarea name="mensaje" rows={4} placeholder="Contanos brevemente qué necesitás" /></label>
					{error && <p className="inst-error">{error}</p>}
					<button type="submit" className="inst-btn inst-btn-primary">Enviar consulta</button>
				</form>
			)}
		</section>
	)
}

export default function InstitucionalDemo() {
	const [open, setOpen] = useState(false)
	const links = [
		{ to: BASE, label: 'Inicio', end: true },
		{ to: `${BASE}/servicios`, label: 'Servicios' },
		{ to: `${BASE}/nosotros`, label: 'Nosotros' },
		{ to: `${BASE}/contacto`, label: 'Contacto' },
	]

	return (
		<div className="inst">
			<DemoBar service="web institucional" pageTitle="Ríos & Asociados · Estudio contable" />
			<header className="inst-header">
				<div className="inst-wrap inst-header-row">
					<Link to={BASE} className="inst-logo">
						<span className="inst-logo-mark">R&amp;A</span>
						<span>Ríos &amp; Asociados<small>Estudio contable</small></span>
					</Link>
					<button className="inst-burger" aria-label="Abrir menú" onClick={() => setOpen(!open)}>☰</button>
					<nav className={open ? 'open' : ''}>
						{links.map((l) => (
							<NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}>{l.label}</NavLink>
						))}
					</nav>
				</div>
			</header>

			<main>
				<Routes>
					<Route index element={<Inicio />} />
					<Route path="servicios" element={<Servicios />} />
					<Route path="nosotros" element={<Nosotros />} />
					<Route path="contacto" element={<Contacto />} />
					<Route path="*" element={<Inicio />} />
				</Routes>
			</main>

			<footer className="inst-footer">
				<div className="inst-wrap inst-footer-row">
					<div>
						<strong>Ríos &amp; Asociados</strong>
						<p>Contabilidad, impuestos y sueldos para pymes y profesionales.</p>
					</div>
					<div className="inst-footer-links">
						{links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
					</div>
				</div>
				<small>© 2026 Ríos &amp; Asociados · Estudio ficticio de demostración</small>
			</footer>
		</div>
	)
}
