import { useEffect } from 'react'
import { whatsappLink } from '../portfolio/services'
import './DemoBar.css'

type Props = {
	service: string
	pageTitle: string
}

// Barra fija arriba de cada demo: aclara que es un ejemplo y lleva a contratar.
export default function DemoBar({ service, pageTitle }: Props) {
	useEffect(() => {
		const prev = document.title
		document.title = `${pageTitle} · Demo de Josué Viturro`
		return () => { document.title = prev }
	}, [pageTitle])

	return (
		<div className="demo-bar" role="note">
			<a className="demo-bar-back" href="/#contrataciones">&larr; Volver</a>
			<span className="demo-bar-text">
				<strong>Demo</strong> · Negocio ficticio, sitio de ejemplo hecho por Josué Viturro
			</span>
			<a
				className="demo-bar-cta"
				href={whatsappLink(`¡Hola Josué! Vi la demo de ${service} y quiero una para mi negocio.`)}
				target="_blank"
				rel="noopener noreferrer"
			>
				Quiero una así
			</a>
		</div>
	)
}
