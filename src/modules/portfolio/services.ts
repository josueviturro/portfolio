// Servicios que se ofrecen en la sección "Contrataciones".
// Para actualizar precios, cambiá solo `price` (y PRICES_UPDATED).

export const WHATSAPP_NUMBER = '5491124018888'
export const PRICES_UPDATED = 'noviembre 2026'

export const whatsappLink = (text: string) =>
	`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export type Service = {
	id: string
	title: string
	tagline: string
	price: string
	priceNote?: string
	includes: string[]
	idealFor: string
	examples: { label: string; to: string }[]
	needsDomain?: boolean
}

// Precios de dominios por año (IVA incluido). Actualizar junto con PRICES_UPDATED.
export const domains = [
	{ ext: '.site', price: '$9.900' },
	{ ext: '.com.ar', price: '$17.900' },
	{ ext: '.com', price: '$19.900' },
]

export const services: Service[] = [
	{
		id: 'landing',
		needsDomain: true,
		title: 'Landing page',
		tagline: 'Tu negocio en internet en una sola página, lista para recibir consultas.',
		price: '$150.000',
		includes: [
			'Una página con quiénes son, servicios o productos, fotos y horarios',
			'Botón directo a WhatsApp e Instagram',
			'Ubicación y cómo llegar',
			'Adaptada a celular y optimizada para Google',
			'Entrega en 5 a 7 días',
		],
		idealFor: 'Comercios de barrio, gastronomía, emprendimientos y profesionales que hoy solo tienen Instagram.',
		examples: [{ label: 'Ver demo: panadería', to: '/demo/landing' }],
	},
	{
		id: 'institucional',
		needsDomain: true,
		title: 'Web institucional',
		tagline: 'Un sitio completo con varias secciones para mostrar tu empresa con seriedad.',
		price: '$300.000',
		includes: [
			'4 a 5 secciones: inicio, servicios, nosotros, equipo y contacto',
			'Formulario de contacto que llega a tu email',
			'Diseño a medida con tu marca y colores',
			'SEO básico para aparecer en búsquedas locales',
			'2 rondas de cambios incluidas',
		],
		idealFor: 'Estudios profesionales, consultorios, empresas de servicios y pymes.',
		examples: [
			{ label: 'Ver demo: estudio contable', to: '/demo/institucional' },
			{ label: 'Proyecto real: MisiónSeg', to: '/proyecto/misionseg' },
		],
	},
	{
		id: 'sistema',
		needsDomain: true,
		title: 'Web con sistema',
		tagline: 'Una web que trabaja por vos: turnos, pedidos o catálogo con panel de administración.',
		price: '$500.000',
		includes: [
			'Turnos online, catálogo editable o tienda con carrito',
			'Panel de administración para gestionar todo sin saber programar',
			'Base de datos y backend propio (APIs, usuarios, permisos)',
			'Cobros online con Mercado Pago (opcional)',
			'Capacitación de uso incluida',
		],
		idealFor: 'Peluquerías, consultorios, gimnasios, comercios con catálogo y cualquier negocio que tome reservas o pedidos.',
		examples: [
			{ label: 'Ver demo: turnos para barbería', to: '/demo/sistema' },
			{ label: 'Proyecto real: Biógrafo Muebles', to: '/proyecto/biografo-muebles' },
		],
	},
	{
		id: 'escritorio',
		title: 'Aplicación de escritorio',
		tagline: 'Software a medida para la PC de tu negocio, funciona aunque se corte internet.',
		price: '$500.000',
		priceNote: 'Si requiere hardware, se suma el costo de los componentes.',
		includes: [
			'Gestión de clientes, stock, caja o personal según tu negocio',
			'Reportes y exportación a Excel o PDF',
			'Base de datos local con copias de seguridad',
			'Integración con hardware: control de acceso, lectores o cerraduras (ESP32)',
			'Instalación y capacitación en tu local',
		],
		idealFor: 'Gimnasios, comercios, talleres y empresas que necesitan ordenar su gestión diaria.',
		examples: [
			{ label: 'Proyecto real: Lyon Fit', to: '/proyecto/lyon-fit' },
			{ label: 'Proyecto real: Alpha Gestión', to: '/proyecto/alpha-gestion' },
		],
	},
]

export const maintenance = {
	title: 'Hosting y mantenimiento mensual',
	price: 'Bajo costo mensual',
	priceNote: 'según el proyecto',
	includes: ['Hosting y certificado de seguridad (https)', 'Copias de seguridad', 'Monitoreo para que tu web esté siempre online', 'Soporte por WhatsApp'],
}

// Lo que aplica a todos los planes (se muestra destacado)
export const allPlans = [
	{ title: 'Diseño incluido', text: 'Logo, colores e identidad visual van incluidos en todos los planes. Si ya tenés tu marca armada, trabajamos con la tuya.' },
	{ title: 'Actualizaciones de bajo costo', text: 'Después de la entrega, los cambios (nuevas secciones, contenido o funciones) tienen un costo bajo según lo que haya que modificar.' },
]

// Letra chica
export const terms = [
	`Precios en pesos argentinos, actualizados a ${PRICES_UPDATED}. La consulta es sin cargo.`,
	'50% para comenzar y 50% al entregar.',
]
