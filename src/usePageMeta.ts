import { useEffect } from 'react'

const SITE = 'https://josueviturro.com'

type Meta = {
	title?: string
	description?: string
	path?: string // para el canonical, ej. '/proyecto/lyon-fit'
	noindex?: boolean
}

// Ajusta título, descripción, canonical y robots de la página actual (Google ejecuta el JS y los lee).
// Al salir de la página restaura los valores de index.html.
export function usePageMeta({ title, description, path, noindex }: Meta) {
	useEffect(() => {
		const head = document.head
		const find = (sel: string) => head.querySelector(sel)
		const desc = find('meta[name="description"]')
		const canonical = find('link[rel="canonical"]')
		const robots = find('meta[name="robots"]')

		const prev = {
			title: document.title,
			desc: desc?.getAttribute('content'),
			canonical: canonical?.getAttribute('href'),
			robots: robots?.getAttribute('content'),
		}

		if (title) document.title = title
		if (description && desc) desc.setAttribute('content', description)
		if (path && canonical) canonical.setAttribute('href', SITE + path)
		if (noindex && robots) robots.setAttribute('content', 'noindex, follow')

		return () => {
			document.title = prev.title
			if (desc && prev.desc != null) desc.setAttribute('content', prev.desc)
			if (canonical && prev.canonical != null) canonical.setAttribute('href', prev.canonical)
			if (robots && prev.robots != null) robots.setAttribute('content', prev.robots)
		}
	}, [title, description, path, noindex])
}
