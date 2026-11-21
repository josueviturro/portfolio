export type GalleryImage = {
	file: string
	title: string
	description: string
}

export const galleryDescriptions: Record<string, GalleryImage[]> = {
	'misionseg': [
		{
			file: 'Home.webp',
			title: 'Inicio',
			description: 'Hero que invita a "Coordiná una visita": botón de contacto directo por WhatsApp y, debajo, un formulario con nombre, teléfono, correo, empresa, dirección y mensaje, junto a una imagen de un edificio corporativo y el aviso "asesores disponibles hoy". Más abajo se destaca el servicio de Custodia en Tránsito con una foto de un camión en ruta, y el footer reúne los datos de contacto, los tres teléfonos, la dirección de la oficina central con enlace a Google Maps y el crédito de desarrollo.'
		},
		{
			file: 'About_us.webp',
			title: 'Nosotros',
			description: 'Sección "¿Quiénes somos?" con la declaración de propósito de la empresa en el hero oscuro, seguida del bloque "La Compañía" con tres párrafos institucionales sobre su historia y enfoque, acompañados de una ilustración de seguridad tecnológica (huella digital, cámaras, candado, escudo, mensajería). Cierra con tres tarjetas que resumen la Misión, la Visión y la Política de Calidad.'
		},
		{
			file: 'Services.webp',
			title: 'Servicios',
			description: 'Catálogo de cuatro servicios en tarjetas con icono propio: Barrios Privados, Custodia de Tránsito, Vigilancia Electrónica y Personal de Vigilancia Física. Las dos últimas muestran tags de funcionalidades específicas (sistema de alarmas, video cámaras, control de accesos, GPS personal, edificios, fábricas, casas quintas), y la página cierra con un banner de llamado a la acción.'
		},
		{
			file: 'Career.webp',
			title: 'Trabaja con nosotros',
			description: 'Formulario de postulación laboral ("Solicitud de Empleo") organizado en secciones: Información Personal (nombre, CUIL, fecha de nacimiento, teléfono, correo), Residencia y Dirección (zona de residencia con botones tipo toggle, más dirección, localidad y provincia) y Antecedentes y Experiencia. Los campos obligatorios se marcan con asteriscos en rojo.'
		}
	],
	'alpha-gestion': [
		{
			file: 'Home.webp',
			title: 'Inicio',
			description: 'Pantalla de bienvenida de la aplicación de escritorio, con el menú lateral fijo (Vista del Personal, Agregar Personal, Unir PDFs) y el acceso directo a "Descargar Excel" siempre visible en la esquina inferior. El panel central guía al usuario a elegir una función desde el menú para empezar a trabajar.'
		},
		{
			file: 'Add-user.webp',
			title: 'Agregar Personal',
			description: 'Formulario para registrar personal, dividido en dos columnas: Datos Personales (Legajo, Nombres, Apellido, DNI, Cargo) y Datos Laborales (Estado, Función, Grupo, Observaciones, Horario). Incluye un botón para guardar el nuevo registro y otro para limpiar todos los campos del formulario.'
		},
		{
			file: 'view-user.webp',
			title: 'Lista de Personal',
			description: 'Tabla con todo el personal cargado, con buscadores independientes por Legajo, Apellido, Nombres y Cargo en la parte superior. Cada columna se puede editar directamente desde un ícono de lápiz, y cada fila tiene un botón para eliminar ese registro de la lista.'
		},
		{
			file: 'export-archive.webp',
			title: 'Exportación a Excel',
			description: 'Aviso de éxito al generar el Excel con el rol de funciones, mostrando la ruta exacta donde se guardó el archivo en la computadora. El reporte se construye automáticamente a partir de los datos cargados en la Lista de Personal, sin necesidad de armarlo a mano.'
		},
		{
			file: 'archive.webp',
			title: 'Archivo generado',
			description: 'El Excel exportado ("ROL DE FUNCIONES") queda disponible como un archivo común en el escritorio, listo para abrir, enviar por mail o compartir con otra persona sin depender de la aplicación.'
		},
		{
			file: 'inside-archive.webp',
			title: 'Contenido del Excel',
			description: 'El archivo final replica las mismas columnas que la aplicación (Legajo, Apellido, Nombres, DNI, Cargo, Estado, Grupo, Función, Observaciones, Horario), manteniendo el dato consistente entre lo que se carga en el sistema y el reporte que termina usando la empresa.'
		}
	],
	'lyon-fit': [
		{
			file: 'socios.webp',
			title: 'Socios',
			description: 'Pantalla principal de la aplicación. A la izquierda, el listado de socios con búsqueda instantánea por nombre o DNI, filtros rápidos (Todos, Al día, Vencidos) con su contador, un punto de color que indica el estado de cada cuota y el botón para exportar todo a CSV. Al elegir un socio se abre su ficha: el estado de la cuota, el DNI con el que ingresa por el teclado de la puerta, sus datos personales y de emergencia, la membresía (plan, vencimiento con los días que faltan y fecha de alta), el historial de pagos con el medio y el nuevo vencimiento de cada uno, y los últimos accesos con el resultado de cada intento. Desde la misma ficha se cobra la cuota, se editan los datos o se da de baja al socio. Arriba a la derecha se ve siempre el estado de conexión del teclado y el acceso a la pantalla de acceso.'
		},
		{
			file: 'caja.webp',
			title: 'Caja',
			description: 'Resumen de ingresos por cuotas y venta de productos en tres tarjetas: hoy, este mes y este año. Cada una muestra el total, la cantidad de cobros y cuánto entró en efectivo y cuánto por transferencia. Debajo, el detalle de cada movimiento con fecha y hora, socio o concepto, plan o producto, medio de pago y monto, con la opción de ver un día puntual desde el calendario o volver a la vista del año completo.'
		},
		{
			file: 'planes-productos.webp',
			title: 'Planes y productos',
			description: 'Catálogo del gimnasio dividido en dos pestañas. En Planes se cargan las cuotas con nombre y precio; son las que después se eligen al dar de alta un socio o al cobrarle. En Productos se arma el kiosco del gimnasio, y desde ahí se registra una venta indicando la cantidad, que entra directamente en la caja. Cada plan o producto se puede crear, editar o eliminar desde el mismo panel.'
		},
		{
			file: 'sistema.webp',
			title: 'Sistema y teclado de acceso',
			description: 'Configuración general de la aplicación. Permite cambiar el nombre del gimnasio y conectar el teclado de la puerta, armado con un ESP32: por cable USB, eligiendo el puerto, o por Wi-Fi, cargando la red, la dirección de la PC, el puerto y una clave. La placa se programa desde la propia app con un botón, sin necesidad de abrir el Arduino IDE. Cuando un socio tipea su DNI, el ESP32 le consulta a la app si la cuota está al día y, si es así, activa un relé que abre la cerradura. También incluye una prueba de ingreso sin hardware, la copia de seguridad de la base de datos y, a la derecha, el registro de eventos en vivo, con filtro para ver solo errores y avisos, para diagnosticar problemas en el gimnasio.'
		}
	],
	'biografo-muebles': [
		{
			file: 'Home.webp',
			title: 'Inicio',
			description: 'Página de inicio con el hero de la nueva colección, un carrusel de categorías destacadas (Roperos, Cómodas, Estanterías), la sección de novedades con productos y una guía de 5 pasos sobre cómo comprar. El footer incluye los datos de contacto, un mapa con la ubicación del local y un enlace directo a WhatsApp.'
		},
		{
			file: 'catalog.webp',
			title: 'Catálogo',
			description: 'Vista del catálogo completo con filtro por categoría (Bancos, Bibliotecas, Camas, Mesas, Mesas de Luz, Mesas Ratonas, Ordenadores, Otros, Percheros, Rack) y tarjetas de producto con imagen, categoría, precio y botón directo para agregar al carrito.'
		},
		{
			file: 'desciption-product.webp',
			title: 'Detalle de producto',
			description: 'Ficha de producto con imagen ampliada, descripción, stock disponible, selector de cantidad y el precio total recalculado en el propio botón de agregar al carrito, con un enlace para volver al catálogo.'
		},
		{
			file: 'cart.webp',
			title: 'Carrito',
			description: 'Carrito de compras con el producto agregado, control de cantidad y opción de eliminarlo, junto a un resumen con subtotal, envío y total, y el botón para iniciar la compra o seguir comprando.'
		},
		{
			file: 'calculator-cost.webp',
			title: 'Cálculo de envío',
			description: 'Calculadora de costo de envío integrada en el checkout: el cliente ingresa su dirección, el sistema la valida y muestra en un mapa la distancia exacta entre el local y el destino, calculando automáticamente el costo de envío que se suma al total del pedido.'
		},
		{
			file: 'prev-purchage.webp',
			title: 'Finalizar compra',
			description: 'Checkout dividido en tres pasos: datos de contacto (nombre, apellido, celular, email), entrega (envío a domicilio o retiro en el local) y método de pago, con el resumen del pedido y el botón de pago con Mercado Pago siempre visible al costado.'
		},
		{
			file: 'admin-panel.webp',
			title: 'Acceso al panel',
			description: 'Login del panel de administración, separado por completo de la tienda pública, con acceso por email y contraseña y un enlace directo para volver a la tienda sin tener que cerrar la sesión administrativa.'
		},
		{
			file: 'admin-products.webp',
			title: 'Panel: Productos',
			description: 'Listado de productos del catálogo con nombre, categoría, precio y stock disponible, con accesos para editar o eliminar cada producto y botones para crear un producto nuevo o ajustar precios de forma masiva.'
		},
		{
			file: 'orders.webp',
			title: 'Panel: Ventas',
			description: 'Listado de órdenes de compra con fecha, cliente, productos, envío, dirección, contacto y estado de cada pedido, para que el negocio pueda seguir y gestionar las ventas generadas desde la tienda.'
		},
		{
			file: 'tasks.webp',
			title: 'Panel: Tareas',
			description: 'Gestor de tareas internas del negocio, con alta rápida de pendientes, marcado de tareas completadas y fecha de creación, pensado como agenda interna para el día a día de la mueblería.'
		}
	]
}
