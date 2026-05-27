import './PortfolioPage.css'
import icoreact from '../../assets/icons/REACT.png'
import icohtml from '../../assets/icons/HTML.png'
import icocss from '../../assets/icons/CSS.png'
import icovite from '../../assets/icons/VITE.png'
import icojs from '../../assets/icons/JS.png'
import icots from '../../assets/icons/TYPESCRIPT.png'
import iconet from '../../assets/icons/NET.png'
import icocshare from "../../assets/icons/cshare.png"
import imagen from '../../assets/images/imagen.png'
import misionseg from '../../assets/images/proyectimages/misionsegLogo.png'
import alphagestion from '../../assets/images/proyectimages/alphagestion.png'
import { useRef , useEffect} from "react";

type Skill = {
	name: string
	icon: string
}

type Project = {
	title: string
	description: string
	tags: string[]
	imagen: string | null
	link: string
}

const skills: Skill[] = [
	{ name: 'HTML', icon: icohtml},
	{ name: 'CSS', icon: icocss },
	{ name: 'JAVASCRIPT', icon: icojs },
	{ name: 'REACT', icon: icoreact },
	{ name: 'VITE', icon: icovite },
	{name: 'TYPESCRIPT', icon: icots },
	{name: '.NET', icon: iconet },
	{name: 'C#', icon: icocshare }
]

const projects: Project[] = [
	{
		title: 'Misi\u00f3nSeg',
		description: 'Empresa de Seguridad privada que ofrece servicio personalizados a sus clientes',
		tags: ['HTML5', 'CSS3', 'React', 'Vite', 'TypeScript'],
		imagen: misionseg,
		link:"https://misionseg.com.ar/"
	},
	{
		title: 'Alpha Gestion',
		description: 'Es un software de gestión para empresas que automatiza el control del personal y sus roles, agiliza la creación de reportes y documentos, todo desde un solo panel de control.',
		tags: [ '.NET', 'C#'],
		imagen: alphagestion,
		link:"https://github.com/josueviturro/AlphaGestion"
	}
]

export default function PortfolioPage() {


const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);
	return (
		<div className="portfolio-page">
			<header className="topbar">
				<a className="brand" href="#inicio" aria-label="Ir al inicio">
					JV.
				</a>

				<nav className="menu" aria-label="Navegaci\u00f3n principal">
					<a href="#inicio">Inicio</a>
					<a href="#habilidades">Habilidades</a>
					<a href="#proyectos">Proyectos</a>
					<a href="#contacto">Contacto</a>
				</nav>

				<a className="cv-button" href="#" aria-label="Descargar CV">
					&darr; CV
				</a>
			</header>

			<main>
				<section id="inicio" className="hero section">
					<div className="avatar-wrap" aria-hidden="true">
						<div className="avatar">
								<img src={imagen} alt="Avatar" className='mi-avatar' />
						</div>
						<span className="avatar-chip"></span>
					</div>

					<h1>
						Josuè <span>Viturro</span>
					</h1>

					<p className="role">DESARROLLADOR FULLSTACK</p>
					<p className="quote">"Codigo limpio, interfaces elegantes, experiencias fluidas."</p>

					<h2 className="section-title">Sobre m&iacute;</h2>

					<div className="about-copy">
						<p>
							Soy desarrollador fullstack atraído por la tecnología y la innovación. Disfruto
    						creando experiencias digitales atractivas y funcionales, siempre buscando la mejor
    						manera de optimizar procesos y mejorar la usabilidad.
						</p>
						<p>
							Actualmente, estudio Licenciatura en Sistemas en la Universidad Nacional de Lanùs, con el objetivo de crecer profesionalmente y ampliar mis conocimientos en
							desarrollo de software.
						</p>
					</div>
				</section>

				<section id="habilidades" className="section skills">
					<h2 className="heading">Habilidades T&eacute;cnicas</h2>
					<div className="underline" aria-hidden="true" />

					<div className="skills-panel" ref={containerRef}>
						{skills.map((skill) => (
							<article className="skill-card" key={skill.name}>
								<div className="skill-icon" aria-hidden="true">
									<img className='skill-icon-image' src={skill.icon} alt="" />
								</div>
								<span>{skill.name}</span>
							</article>
						))}
					</div>
				</section>

				<section id="proyectos" className="section projects">
					<h2 className="heading">Mis Desarrollos</h2>
					<div className="underline" aria-hidden="true" />

					<div className="project-grid">
						{projects.map((project) => (
							<article className="project-card" key={project.title}>
								<div className='project-imagen-content'>
									<a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">{project.imagen && <img src={project.imagen} alt={project.title} className='project-image'/>}</a>
								</div>
								<div className='project-text-content'>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<ul className="tags" aria-label={`Tecnolog\u00edas de ${project.title}`}>
										{project.tags.map((tag) => (
												<li key={tag}>{tag}</li>
											))}
										</ul>
									</div>

							</article>
						))}
					</div>
				</section>

				<section id="contacto" className="section contact">
					<div className="contact-info">
						<h2>Informaciòn de Contacto</h2>

						<div className="contact-row">
							<span className="icon-box" aria-hidden="true">
								&#9993;
							</span>
							<div>
								<strong>EMAIL</strong>
								<p>josueviturro@gmail.com</p>
							</div>
						</div>

						<div className="contact-row">
							<span className="icon-box" aria-hidden="true">
								&#9939;
							</span>
							<div>
								<strong>REDES</strong>
								<div className="socials" aria-label="Redes sociales">
									<a href="#" aria-label="GitHub">
										&#9703;
									</a>
									<a href="#" aria-label="YouTube">
										&#9704;
									</a>
									<a href="#" aria-label="Discord">
										&#9705;
									</a>
								</div>
							</div>
						</div>
					</div>

					<form className="contact-form" onSubmit={(event) => event.preventDefault()}>
						<h3>Envìame un mensaje</h3>

						<label htmlFor="name">NOMBRE</label>
						<input id="name" type="text" placeholder="Tu Nombre" />

						<label htmlFor="email">EMAIL</label>
						<input id="email" type="email" placeholder="tu@email.com" />

						<label htmlFor="message">MENSAJE</label>
						<textarea id="message" rows={5} placeholder="Escribe tu mensaje..." />

						<button type="submit">Enviar Mensaje</button>
						<div className='separator-container'>
							<div className='separator'></div>
							<p>O</p>
							<div className='separator'></div>
						</div>
						<a href="https://wa.me/5491124018888" className='wp-message'><span className='button-whatsapp'>Whatsapp</span></a>
					</form>
					
				</section>
			</main>

			<footer>
				&copy; 2026 Josuè Viturro. Hecho con <span>&hearts;</span> y Còdigo Limpio.
			</footer>
		</div>
	)
}