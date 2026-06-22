import './ProjectDetailPage.css'
import { Link, useParams } from 'react-router-dom'
import { projects } from './projects'

export default function ProjectDetailPage() {
	const { slug } = useParams<{ slug: string }>()
	const project = projects.find((p) => p.slug === slug)

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

				<h1>{project.title}</h1>

				<ul className="tags" aria-label={`Tecnologías de ${project.title}`}>
					{project.tags.map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ul>

				<p className="project-detail-description">{project.longDescription}</p>

				<a className="project-visit-link" href={project.link} target="_blank" rel="noopener noreferrer">
					Visitar sitio &#8599;
				</a>
			</main>
		</div>
	)
}
