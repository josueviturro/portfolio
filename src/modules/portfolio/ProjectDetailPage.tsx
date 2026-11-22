import './ProjectDetailPage.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from './projects'
import { silabear } from './hyphenate'
import { techIcons } from './techIcons'
import { galleryDescriptions, type GalleryImage } from './galleryDescriptions'
import { usePageMeta } from '../../usePageMeta'

const galleryImages = import.meta.glob<string>(
	'../../assets/images/proyectimages/*/*.{png,jpg,jpeg,webp,mp4}',
	{ eager: true, import: 'default' }
)

const isVideo = (file: string) => file.toLowerCase().endsWith('.mp4')

// Corta en el último espacio antes del límite para no partir palabras en la descripción de Google.
const recortar = (texto: string, max: number) =>
	texto.length <= max ? texto : texto.slice(0, texto.lastIndexOf(' ', max - 1)).replace(/[,:;]$/, '') + '…'

export default function ProjectDetailPage() {
	const { slug } = useParams<{ slug: string }>()
	const project = projects.find((p) => p.slug === slug)
	const gallery = slug ? galleryDescriptions[slug] : undefined
	const [activeShot, setActiveShot] = useState<(GalleryImage & { src: string }) | null>(null)

	usePageMeta({
		title: project ? `${project.title} · Proyecto de Josué Viturro` : 'Proyecto no encontrado · Josué Viturro',
		description: project ? recortar(project.description, 155) : undefined,
		path: project ? `/proyecto/${project.slug}` : undefined,
		noindex: !project,
	})

	useEffect(() => {
		if (!activeShot) return
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setActiveShot(null)
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [activeShot])

	if (!project) {
		return (
			<div className="project-detail-page">
				<div className="project-detail-notfound">
					<h1>Proyecto no encontrado</h1>
					<Link to="/" className="back-link">&larr; Volver al inicio</Link>
				</div>
			</div>
		)
	}

	return (
		<div className="project-detail-page">
			<header className="project-detail-header">
				<Link to="/" className="back-link">&larr; Volver al portfolio</Link>
			</header>

			<main className="project-detail-main">
				<div className="project-detail-cover">
					{project.imagen && <img src={project.imagen} alt={project.title} />}
				</div>

				<div className="project-tech-icons" aria-label={`Tecnologías de ${project.title}`}>
					{project.tags.map((tag) => {
						const icon = techIcons[tag]
						if (!icon) return null
						return (
							<div className="project-tech-icon" key={tag} title={tag}>
								<img src={icon} alt="" />
								<span>{tag}</span>
							</div>
						)
					})}
				</div>

				{/* Titulo del proyecto y descripción */}
				<div className='title-container'><h1>{project.title}</h1><a className="project-visit-link" href={project.link} target="_blank" rel="noopener noreferrer">
					Visitar sitio &#8599;</a></div>
				<p className="project-detail-description">{silabear(project.longDescription)}</p>
				<hr className="project-detail-divider" />
				{/* Titulo del proyecto y descripción */}

				{gallery && gallery.length > 0 && (
					<div className="project-gallery">
						{gallery.map((shot) => {
							const src = galleryImages[`../../assets/images/proyectimages/${project.slug}/${shot.file}`]
							if (!src) return null
							return (
								<div className="project-gallery-entry" key={shot.file}>
									<h2>{shot.title}</h2>
									<p>{silabear(shot.description)}</p>
									<div className="project-gallery-thumb-container">
										{isVideo(shot.file) ? (
											<video
												className="project-gallery-thumb project-gallery-video"
												src={src}
												autoPlay
												loop
												muted
												playsInline
												onClick={() => setActiveShot({ ...shot, src })}
											/>
										) : (
											<button
												type="button"
												className="project-gallery-thumb"
												onClick={() => setActiveShot({ ...shot, src })}
											>
												<img src={src} alt={shot.title} />
											</button>
										)}
									</div>
								</div>
							)
						})}
					</div>
				)}
			</main>

			{activeShot && (
				<div className="project-gallery-overlay" onClick={() => setActiveShot(null)}>
					<button
						type="button"
						className="project-gallery-close"
						onClick={() => setActiveShot(null)}
						aria-label="Cerrar"
					>
						&times;
					</button>
					<figure onClick={(e) => e.stopPropagation()}>
						{isVideo(activeShot.file) ? (
							<video src={activeShot.src} controls autoPlay loop muted playsInline />
						) : (
							<img src={activeShot.src} alt={activeShot.title} />
						)}
						<figcaption>
							<strong>{activeShot.title}</strong>
							<span>{activeShot.description}</span>
						</figcaption>
					</figure>
				</div>
			)}
		</div>
	)
}
