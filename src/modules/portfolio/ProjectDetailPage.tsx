import './ProjectDetailPage.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from './projects'
import { techIcons } from './techIcons'
import { galleryDescriptions, type GalleryImage } from './galleryDescriptions'

const galleryImages = import.meta.glob<string>(
	'../../assets/images/proyectimages/*/*.{png,jpg,jpeg,webp}',
	{ eager: true, import: 'default' }
)

export default function ProjectDetailPage() {
	const { slug } = useParams<{ slug: string }>()
	const project = projects.find((p) => p.slug === slug)
	const gallery = slug ? galleryDescriptions[slug] : undefined
	const [activeShot, setActiveShot] = useState<(GalleryImage & { src: string }) | null>(null)

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
				<p className="project-detail-description">{project.longDescription}</p>
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
									<p>{shot.description}</p>
									<div className="project-gallery-thumb-container">
										<button
											type="button"
											className="project-gallery-thumb"
											onClick={() => setActiveShot({ ...shot, src })}
										>
											<img src={src} alt={shot.title} />
										</button>
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
						<img src={activeShot.src} alt={activeShot.title} />
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
