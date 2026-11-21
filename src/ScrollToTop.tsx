import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
	const { pathname, hash } = useLocation()

	useEffect(() => {
		// Si viene con #seccion (ej: /#contrataciones desde una demo), ir a esa sección
		if (hash) {
			const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50)
			return () => clearTimeout(t)
		}
		window.scrollTo(0, 0)
	}, [pathname, hash])

	return null
}
