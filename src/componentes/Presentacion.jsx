

const Presentacion = () => {


    return(

        <div className="container_presen">
            <div className="retrato">
                <img src="/imagenes/Imagen.webp" className="imagen_retrato" />
            </div>
            <div className="textos_presen">
                <h3 className="nombre_titulo">Josué Viturro</h3>
                <h3 className="eslogan_titulo">Desarrollador Frontend & Python</h3>
                <h3 className="corta_descripcion">"Código limpio, interfaces elegantes, experiencias fluidas."</h3>
            </div>
            <div className="sobre_mi">
                <h2>Sobre mi:</h2>
                <p className="texto_sobre_mi">"Soy desarrollador Frontend con experiencia en HTML, CSS, JavaScript, React, Electron y Python. Me apasiona crear soluciones innovadoras y formar parte de equipos dinámicos donde pueda aportar mis habilidades técnicas. Actualmente, estoy cursando la carrera de Ingeniería en Informática en la Universidad Nacional Arturo Jauretche. Busco seguir creciendo profesionalmente, participando en todas las etapas del desarrollo de software y aprendiendo de cada proyecto."</p>
            </div>
        </div>
    )
} 

export default Presentacion