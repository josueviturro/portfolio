import misionseg from '../../assets/images/proyectimages/misionseg/misionsegLogo.png'
import alphagestion from '../../assets/images/proyectimages/alpha-gestion/AlphaGestion.png'
import biografo from '../../assets/images/proyectimages/biografo-muebles/BiografoLogo.png'
import lyonfit from '../../assets/images/proyectimages/lyon-fit/LyonFitLogo.png'

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
		slug: 'biografo-muebles',
		title: 'Biógrafo Muebles',
		description: 'E-commerce de muebles con catálogo organizado por categorías según el tipo de mueble, integración de pagos con Mercado Pago, calculadora de costos de envío según la distancia y panel de administración para gestionar las compras realizadas por los clientes.',
		longDescription: 'Desarrollé un e-commerce completo para una mueblería, con catálogo organizado por categorías según el tipo de mueble, integración de Mercado Pago para pagos online, un calculador de costo de envío según la distancia del cliente, y un panel de administración donde el negocio puede ver y gestionar las compras realizadas.',
		tags: ['HTML5', 'CSS3', 'Vite', 'TypeScript', 'React', 'Vercel', 'Supabase'],
		imagen: biografo,
		link: 'https://mueblesbiografo.com.ar'
	},
	{
		slug: 'lyon-fit',
		title: 'Lyon Fit',
		description: 'Sistema de gestión de escritorio para gimnasios: control de acceso por hardware con ESP32, cobro de cuotas, caja diaria, venta de productos y administración de socios, todo desde una sola aplicación.',
		longDescription: 'Desarrollé una aplicación de escritorio en C# con WinUI 3 para automatizar la gestión diaria de un gimnasio: alta, edición y búsqueda de socios por nombre o DNI, cobro de cuotas con cálculo automático del vencimiento, caja con totales del día, del mes y del año separando efectivo y transferencia, y catálogo de planes y productos. Para el control de acceso físico diseñé un sistema con un ESP32 y un teclado matricial: el socio ingresa su DNI, el ESP32 consulta a la app por USB o Wi-Fi y, si la cuota está al día, abre la cerradura mediante un relé; cada ingreso queda registrado y se muestra en una pantalla de acceso en un segundo monitor. Los datos se guardan en una base SQLite local con copias de seguridad y registro de eventos, y el modelo ya está preparado para sincronizarse con la nube. Soy el único desarrollador del proyecto, que está en producción con mantenimiento y actualizaciones activas.',
		tags: ['C#', '.NET', 'SQLite', 'ESP32'],
		imagen: lyonfit,
		link: 'https://github.com/josueviturro/AppGym'
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
		slug: 'misionseg',
		title: 'MisiónSeg',
		description: 'Sitio web para MisiónSeg, empresa de seguridad privada, donde diseñé secciones claras para cada plan y modalidad de trabajo en seguridad, detallando alcance y condiciones de cada servicio para que el cliente no se quede con dudas. Incluye un formulario de contacto pensado para facilitar la consulta y acompañar la venta.',
		longDescription: 'Desarrollé el sitio web completo para MisiónSeg, una empresa de seguridad privada, desde el diseño hasta la implementación. El sitio incluye una presentación de los servicios ofrecidos, diseño totalmente responsivo y optimización para buscadores. Actualmente está en producción y es el canal principal que usa la empresa para comunicarse con sus clientes.',
		tags: ['HTML5', 'CSS3', 'React', 'Vite', 'TypeScript'],
		imagen: misionseg,
		link: 'https://misionseg.com.ar/'
	}
]
