export type GalleryImage = {
	file: string
	title: string
	description: string
}

export const galleryDescriptions: Record<string, GalleryImage[]> = {
	'misionseg': [
		{
			file: 'Home.png',
			title: 'Inicio',
			description: 'Hero que invita a "Coordiná una visita": botón de contacto directo por WhatsApp y, debajo, un formulario con nombre, teléfono, correo, empresa, dirección y mensaje, junto a una imagen de un edificio corporativo y el aviso "asesores disponibles hoy". Más abajo se destaca el servicio de Custodia en Tránsito con una foto de un camión en ruta, y el footer reúne los datos de contacto, los tres teléfonos, la dirección de la oficina central con enlace a Google Maps y el crédito de desarrollo.'
		},
		{
			file: 'About_us.png',
			title: 'Nosotros',
			description: 'Sección "¿Quiénes somos?" con la declaración de propósito de la empresa en el hero oscuro, seguida del bloque "La Compañía" con tres párrafos institucionales sobre su historia y enfoque, acompañados de una ilustración de seguridad tecnológica (huella digital, cámaras, candado, escudo, mensajería). Cierra con tres tarjetas que resumen la Misión, la Visión y la Política de Calidad.'
		},
		{
			file: 'Services.png',
			title: 'Servicios',
			description: 'Catálogo de cuatro servicios en tarjetas con icono propio: Barrios Privados, Custodia de Tránsito, Vigilancia Electrónica y Personal de Vigilancia Física. Las dos últimas muestran tags de funcionalidades específicas (sistema de alarmas, video cámaras, control de accesos, GPS personal, edificios, fábricas, casas quintas), y la página cierra con un banner de llamado a la acción.'
		},
		{
			file: 'Career.png',
			title: 'Trabaja con nosotros',
			description: 'Formulario de postulación laboral ("Solicitud de Empleo") organizado en secciones: Información Personal (nombre, CUIL, fecha de nacimiento, teléfono, correo), Residencia y Dirección (zona de residencia con botones tipo toggle, más dirección, localidad y provincia) y Antecedentes y Experiencia. Los campos obligatorios se marcan con asteriscos en rojo.'
		}
	],
	'alpha-gestion': [
		{
			file: 'Home.png',
			title: 'Inicio',
			description: 'Pantalla de bienvenida de la aplicación de escritorio, con el menú lateral fijo (Vista del Personal, Agregar Personal, Unir PDFs) y el acceso directo a "Descargar Excel" siempre visible en la esquina inferior. El panel central guía al usuario a elegir una función desde el menú para empezar a trabajar.'
		},
		{
			file: 'Add-user.png',
			title: 'Agregar Personal',
			description: 'Formulario para registrar personal, dividido en dos columnas: Datos Personales (Legajo, Nombres, Apellido, DNI, Cargo) y Datos Laborales (Estado, Función, Grupo, Observaciones, Horario). Incluye un botón para guardar el nuevo registro y otro para limpiar todos los campos del formulario.'
		},
		{
			file: 'view-user.png',
			title: 'Lista de Personal',
			description: 'Tabla con todo el personal cargado, con buscadores independientes por Legajo, Apellido, Nombres y Cargo en la parte superior. Cada columna se puede editar directamente desde un ícono de lápiz, y cada fila tiene un botón para eliminar ese registro de la lista.'
		},
		{
			file: 'export-archive.png',
			title: 'Exportación a Excel',
			description: 'Aviso de éxito al generar el Excel con el rol de funciones, mostrando la ruta exacta donde se guardó el archivo en la computadora. El reporte se construye automáticamente a partir de los datos cargados en la Lista de Personal, sin necesidad de armarlo a mano.'
		},
		{
			file: 'archive.png',
			title: 'Archivo generado',
			description: 'El Excel exportado ("ROL DE FUNCIONES") queda disponible como un archivo común en el escritorio, listo para abrir, enviar por mail o compartir con otra persona sin depender de la aplicación.'
		},
		{
			file: 'inside-archive.png',
			title: 'Contenido del Excel',
			description: 'El archivo final replica las mismas columnas que la aplicación (Legajo, Apellido, Nombres, DNI, Cargo, Estado, Grupo, Función, Observaciones, Horario), manteniendo el dato consistente entre lo que se carga en el sistema y el reporte que termina usando la empresa.'
		}
	],
	'biografo-muebles': [
		{
			file: 'Home.png',
			title: 'Inicio',
			description: 'Página de inicio con el hero de la nueva colección, un carrusel de categorías destacadas (Roperos, Cómodas, Estanterías), la sección de novedades con productos y una guía de 5 pasos sobre cómo comprar. El footer incluye los datos de contacto, un mapa con la ubicación del local y un enlace directo a WhatsApp.'
		},
		{
			file: 'catalog.png',
			title: 'Catálogo',
			description: 'Vista del catálogo completo con filtro por categoría (Bancos, Bibliotecas, Camas, Mesas, Mesas de Luz, Mesas Ratonas, Ordenadores, Otros, Percheros, Rack) y tarjetas de producto con imagen, categoría, precio y botón directo para agregar al carrito.'
		},
		{
			file: 'desciption-product.png',
			title: 'Detalle de producto',
			description: 'Ficha de producto con imagen ampliada, descripción, stock disponible, selector de cantidad y el precio total recalculado en el propio botón de agregar al carrito, con un enlace para volver al catálogo.'
		},
		{
			file: 'cart.png',
			title: 'Carrito',
			description: 'Carrito de compras con el producto agregado, control de cantidad y opción de eliminarlo, junto a un resumen con subtotal, envío y total, y el botón para iniciar la compra o seguir comprando.'
		},
		{
			file: 'calculator-cost.png',
			title: 'Cálculo de envío',
			description: 'Calculadora de costo de envío integrada en el checkout: el cliente ingresa su dirección, el sistema la valida y muestra en un mapa la distancia exacta entre el local y el destino, calculando automáticamente el costo de envío que se suma al total del pedido.'
		},
		{
			file: 'prev-purchage.png',
			title: 'Finalizar compra',
			description: 'Checkout dividido en tres pasos: datos de contacto (nombre, apellido, celular, email), entrega (envío a domicilio o retiro en el local) y método de pago, con el resumen del pedido y el botón de pago con Mercado Pago siempre visible al costado.'
		},
		{
			file: 'admin-panel.png',
			title: 'Acceso al panel',
			description: 'Login del panel de administración, separado por completo de la tienda pública, con acceso por email y contraseña y un enlace directo para volver a la tienda sin tener que cerrar la sesión administrativa.'
		},
		{
			file: 'admin-products.png',
			title: 'Panel: Productos',
			description: 'Listado de productos del catálogo con nombre, categoría, precio y stock disponible, con accesos para editar o eliminar cada producto y botones para crear un producto nuevo o ajustar precios de forma masiva.'
		},
		{
			file: 'orders.png',
			title: 'Panel: Ventas',
			description: 'Listado de órdenes de compra con fecha, cliente, productos, envío, dirección, contacto y estado de cada pedido, para que el negocio pueda seguir y gestionar las ventas generadas desde la tienda.'
		},
		{
			file: 'tasks.png',
			title: 'Panel: Tareas',
			description: 'Gestor de tareas internas del negocio, con alta rápida de pendientes, marcado de tareas completadas y fecha de creación, pensado como agenda interna para el día a día de la mueblería.'
		}
	]
}
