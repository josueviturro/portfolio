import './PortfolioPage.css'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'
import icoreact from '../../assets/icons/REACT.png'
import icohtml from '../../assets/icons/HTML.png'
import icocss from '../../assets/icons/CSS.png'
import icovite from '../../assets/icons/VITE.png'
import icojs from '../../assets/icons/JS.png'
import icots from '../../assets/icons/TYPESCRIPT.png'
import iconet from '../../assets/icons/NET.png'
import icocshare from "../../assets/icons/cshare.png"
import iconode from '../../assets/icons/NODE.png'
import icovercel from '../../assets/icons/VERCEL.png'
import icosupabase from '../../assets/icons/SUPABASE.png'
import imagen from '../../assets/images/imagen.png'
import linkedin from '/linkedin.png'
import github from '/github.png'
import { useEffect, useRef, useState, type FormEvent } from "react";
import { projects } from './projects'



type Skill = {
	name: string
	icon: string
}

const skills: Skill[] = [
	{ name: 'HTML', icon: icohtml},
	{ name: 'CSS', icon: icocss },
	{ name: 'JAVASCRIPT', icon: icojs },
	{ name: 'REACT', icon: icoreact },
	{ name: 'VITE', icon: icovite },
	{name: 'TYPESCRIPT', icon: icots },
	{name: '.NET', icon: iconet },
	{name: 'C#', icon: icocshare },
	{name: 'NODE.JS', icon: iconode },
	{name: 'VERCEL', icon: icovercel },
	{name: 'SUPABASE', icon: icosupabase }
]

export default function PortfolioPage() {

	const [name, setName] = useState<string>('') || null;
	const [email, setEmail] = useState<string>('') || null;
	const [message, setMessage] = useState<string>('') || null;


const containerRef = useRef<HTMLDivElement | null>(null);
const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.30 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

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

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
	e.preventDefault();

	if (!formRef.current) return;

	const serviceId = import.meta.env.VITE_SERVICE_ID_EMAIL;
	const templateId = import.meta.env.VITE_TEMPLATE_ID_EMAIL;
	const publicKey = import.meta.env.VITE_PUBLIC_KEY_EMAIL;

	if (!serviceId || !templateId || !publicKey) {
		console.error('Faltan variables de entorno de EmailJS:', {
			serviceId,
			templateId,
			publicKey,
		});
		return;
	}

	emailjs.sendForm(
		serviceId,
		templateId,
		formRef.current,
		publicKey
	)
	.then((response) => {
		console.log('Email enviado con éxito:', response.status, response.text);
		setName('');
		setEmail('');
		setMessage('');
		alert('¡Mensaje enviado! Gracias por contactarme.');
	})
	.catch((error: unknown) => {
		console.error('Error al enviar el email:', error);
	});
  }

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

					<span className="availability-badge">
						<span className="availability-dot" aria-hidden="true"></span>
						Abierto a propuestas laborales
					</span>

					<p className="quote">"Codigo limpio, interfaces elegantes, experiencias fluidas."</p>

					<h2 className="section-title">Sobre m&iacute;</h2>

					<div className="about-copy">
						<p>
							Soy desarrollador fullstack con foco en construir soluciones reales: desde interfaces
							web atractivas hasta aplicaciones de escritorio que automatizan procesos de negocio.
						</p>
						<p>
							Me muevo cómodo tanto en el frontend con React y TypeScript como en el backend con
							Node.js, además de desarrollar aplicaciones de escritorio con .NET y C#. Complemento
							mi stack con servicios como Vercel y Supabase para desplegar y dar soporte a lo que
							construyo, entendiendo cada proyecto de punta a punta.
						</p>
						<p>
							Actualmente estoy cursando la Licenciatura en Sistemas en la UNLa, donde profundizo
							los fundamentos que sostienen lo que construyo en el día a día.
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
							<article className="project-card" key={project.slug}>
								<div className='project-imagen-content'>
									<Link className="project-link" to={`/proyecto/${project.slug}`}>{project.imagen && <img src={project.imagen} alt={project.title} className='project-image'/>}</Link>
								</div>
								<div className='project-text-content'>
									<h3>
										<Link to={`/proyecto/${project.slug}`} className="project-title-link">{project.title}</Link>
									</h3>
									<p>{project.description}</p>
									<ul className="tags" aria-label={`Tecnolog\u00edas de ${project.title}`}>
										{project.tags.map((tag) => (
												<li key={tag}>{tag}</li>
											))}
										</ul>
									<Link to={`/proyecto/${project.slug}`} className="project-detail-link">Ver detalle &rarr;</Link>
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
								🗫
							</span>
							<div>
								<strong>REDES</strong>
								<div className="socials" aria-label="Redes sociales">
									<a aria-label="GitHub" href="https://www.linkedin.com/in/josue-viturro/" target="_blank" rel="noopener noreferrer">
										<img className='icon-socials' src={linkedin} alt="Linkedin"  />
									</a>
									<a aria-label="GitHub" href="https://github.com/josueviturro" target="_blank" rel="noopener noreferrer">
										<img className='icon-socials' src={github} alt="github"  />
									</a>
								</div>
							</div>
						</div>
					</div>

					<form className="contact-form" ref={formRef} onSubmit={sendEmail}>
						<h3>Envìame un mensaje</h3>

						<label htmlFor="name">NOMBRE</label>
						<input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu Nombre" />

						<label htmlFor="email">EMAIL</label>
						<input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.com" />

						<label htmlFor="message">MENSAJE</label>
						<textarea id="message" name="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Escribe tu mensaje..." />

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
