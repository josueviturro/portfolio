import { useState, type MouseEvent } from 'react'
import DemoBar from '../DemoBar'
import './LandingDemo.css'

const products = [
	{ icon: '🥐', name: 'Medialunas de manteca', desc: 'Hojaldre de 72 h de fermentación', price: '$1.200 c/u' },
	{ icon: '🍞', name: 'Pan de masa madre', desc: 'Harina orgánica, corteza crocante', price: '$6.500' },
	{ icon: '🥖', name: 'Baguette clásica', desc: 'Horneada tres veces por día', price: '$2.800' },
	{ icon: '🍰', name: 'Torta del día', desc: 'Chocotorta, lemon pie o rogel', price: '$4.900 la porción' },
	{ icon: '🥧', name: 'Tartas saladas', desc: 'Jamón y queso, verdura o calabaza', price: '$3.600' },
	{ icon: '☕', name: 'Café de especialidad', desc: 'Con leche, cortado o flat white', price: '$2.400' },
]

const hours = [
	['Lunes a viernes', '7:00 – 20:30'],
	['Sábados', '7:30 – 21:00'],
	['Domingos', '8:00 – 13:00'],
]

export default function LandingDemo() {
	const [toast, setToast] = useState('')
	const fake = (msg: string) => (e: MouseEvent) => {
		e.preventDefault()
		setToast(msg)
		setTimeout(() => setToast(''), 2800)
	}
	const waMsg = 'En tu web, este botón abre un chat de WhatsApp con tu negocio.'

	return (
		<div className="lp">
			<DemoBar service="landing page" pageTitle="Masa Madre · Panadería artesanal" />

			<header className="lp-nav">
				<span className="lp-logo">Masa<em>Madre</em></span>
				<nav>
					<a href="#productos">Productos</a>
					<a href="#nosotros">Nosotros</a>
					<a href="#horarios">Horarios</a>
				</nav>
			</header>

			<section className="lp-hero">
				<div className="lp-hero-copy">
					<span className="lp-kicker">Panadería artesanal · desde 1998</span>
					<h1>El pan de siempre,<br />hecho como antes.</h1>
					<p>Fermentación lenta, harinas seleccionadas y todo horneado en el día. Pedí por WhatsApp y retirá sin hacer fila.</p>
					<div className="lp-hero-actions">
						<a href="#" className="lp-btn lp-btn-primary" onClick={fake(waMsg)}>Hacer un pedido</a>
						<a href="#productos" className="lp-btn lp-btn-ghost">Ver productos</a>
					</div>
				</div>
				<div className="lp-hero-art" aria-hidden="true">
					<span className="lp-art-big">🥐</span>
					<span className="lp-art-a">🍞</span>
					<span className="lp-art-b">🥖</span>
					<div className="lp-art-badge">
						<strong>+25 años</strong>
						<span>en el barrio</span>
					</div>
				</div>
			</section>

			<section id="productos" className="lp-section">
				<h2>Lo más pedido</h2>
				<p className="lp-sub">Precios de referencia. Consultá por encargos y tortas para eventos.</p>
				<div className="lp-products">
					{products.map((p) => (
						<article key={p.name} className="lp-product">
							<span className="lp-product-icon" aria-hidden="true">{p.icon}</span>
							<h3>{p.name}</h3>
							<p>{p.desc}</p>
							<strong>{p.price}</strong>
						</article>
					))}
				</div>
			</section>

			<section id="nosotros" className="lp-section lp-why">
				<h2>¿Por qué Masa Madre?</h2>
				<div className="lp-why-grid">
					<div><span>🌾</span><h3>Ingredientes reales</h3><p>Sin premezclas ni conservantes. Manteca, harina, agua y tiempo.</p></div>
					<div><span>⏰</span><h3>Recién horneado</h3><p>Tres horneadas por día: 7, 12 y 17 h. Siempre hay algo caliente.</p></div>
					<div><span>🛵</span><h3>Envíos en el barrio</h3><p>Pedí antes de las 10 y te lo llevamos para el desayuno.</p></div>
				</div>
			</section>

			<section className="lp-section">
				<h2>Lo que dicen los vecinos</h2>
				<div className="lp-reviews">
					<blockquote>“Las medialunas son las mejores de la zona, no exagero.”<cite>— Carla · ★★★★★</cite></blockquote>
					<blockquote>“Encargué una torta para un cumpleaños y quedó espectacular.”<cite>— Martín · ★★★★★</cite></blockquote>
					<blockquote>“Atención de diez y el pan de masa madre me dura toda la semana.”<cite>— Sofía · ★★★★★</cite></blockquote>
				</div>
			</section>

			<section id="horarios" className="lp-section lp-visit">
				<div>
					<h2>Visitanos</h2>
					<p className="lp-address">📍 Av. Ejemplo 1234, Buenos Aires</p>
					<table className="lp-hours">
						<tbody>
							{hours.map(([d, h]) => (
								<tr key={d}><td>{d}</td><td>{h}</td></tr>
							))}
						</tbody>
					</table>
					<a href="#" className="lp-btn lp-btn-primary" onClick={fake('En tu web, este botón abre Google Maps con tu dirección.')}>Cómo llegar</a>
				</div>
				<div className="lp-map" aria-label="Mapa de ubicación">
					<div className="lp-map-pin">📍</div>
					<span>Acá va el mapa de Google con tu ubicación</span>
				</div>
			</section>

			<footer className="lp-footer">
				<span className="lp-logo">Masa<em>Madre</em></span>
				<div>
					<a href="#" onClick={fake('En tu web, esto abre tu Instagram.')}>Instagram</a>
					<a href="#" onClick={fake(waMsg)}>WhatsApp</a>
				</div>
				<small>© 2026 Masa Madre · Negocio ficticio de demostración</small>
			</footer>

			<a href="#" className="lp-wa-float" aria-label="WhatsApp" onClick={fake(waMsg)}>
				<svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true"><path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.5.7 4.8 1.9 6.8L3 29l6.8-2.1c1.9 1 4 1.6 6.2 1.6 7 0 12.7-5.6 12.7-12.6S23 3 16 3zm0 23.1c-2 0-3.9-.6-5.5-1.6l-.4-.2-4 1.2 1.3-3.9-.3-.4c-1.1-1.7-1.7-3.6-1.7-5.6C5.4 9.8 10.2 5.1 16 5.1s10.6 4.7 10.6 10.5S21.8 26.1 16 26.1zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.4c.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>
			</a>

			{toast && <div className="lp-toast" role="status">{toast}</div>}
		</div>
	)
}
