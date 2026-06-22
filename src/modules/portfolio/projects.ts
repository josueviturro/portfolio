import misionseg from '../../assets/images/proyectimages/misionsegLogo.png'
import alphagestion from '../../assets/images/proyectimages/AlphaGestion.png'
import biografo from '../../assets/images/proyectimages/BiografoLogo.png'

export type Project = {
	slug: string
	title: string
	description: string
	longDescription: string
	tags: string[]
	imagen: string | null
	link: string
}

export const projects: Project[] = [
	{
		slug: 'misionseg',
		title: 'MisiónSeg',
		description: 'Sitio web para MisiónSeg, empresa de seguridad privada, donde diseñé secciones claras para cada plan y modalidad de trabajo en seguridad, detallando alcance y condiciones de cada servicio para que el cliente no se quede con dudas. Incluye un formulario de contacto pensado para facilitar la consulta y acompañar la venta.',
		longDescription: 'Desarrollé el sitio web completo para MisiónSeg, una empresa de seguridad privada, desde el diseño hasta la implementación. El sitio incluye una presentación de los servicios ofrecidos, diseño totalmente responsivo y optimización para buscadores. Actualmente está en producción y es el canal principal que usa la empresa para comunicarse con sus clientes.',
		tags: ['HTML5', 'CSS3', 'React', 'Vite', 'TypeScript'],
		imagen: misionseg,
		link: 'https://misionseg.com.ar/'
	},
	{
		slug: 'alpha-gestion',
		title: 'Alpha Gestion',
		description: 'Es un software de gestión para empresas que automatiza el control del personal y sus roles, agiliza la creación de reportes y documentos, todo desde un solo panel de control.',
		longDescription: 'Construí un software de escritorio en C# y .NET para automatizar la gestión de personal en pequeñas y medianas empresas. La aplicación centraliza el control de roles, la generación de reportes y la documentación del personal en un solo panel, reemplazando procesos manuales que antes se llevaban en planillas sueltas.',
		tags: ['.NET', 'C#'],
		imagen: alphagestion,
		link: 'https://github.com/josueviturro/AlphaGestion'
	},
	{
		slug: 'biografo-muebles',
		title: 'Biógrafo Muebles',
		description: 'E-commerce de muebles con catálogo organizado por categorías según el tipo de mueble, integración de pagos con Mercado Pago, calculadora de costos de envío según la distancia y panel de administración para gestionar las compras realizadas por los clientes.',
		longDescription: 'Desarrollé un e-commerce completo para una mueblería, con catálogo organizado por categorías según el tipo de mueble, integración de Mercado Pago para pagos online, un calculador de costo de envío según la distancia del cliente, y un panel de administración donde el negocio puede ver y gestionar las compras realizadas.',
		tags: ['HTML5', 'CSS3', 'Vite', 'TypeScript', 'React', 'Vercel', 'Supabase'],
		imagen: biografo,
		link: 'https://mueblesbiografo.com.ar'
	}
]
