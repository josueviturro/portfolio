

const Presentacion = () => {


    return(

        <div className="container_presen">
            <div className="retrato">
                <img src="/imagenes/imagen.png" className="imagen_retrato" />
            </div>
            <div className="textos_presen">
                <h3 className="nombre_titulo">Josué Viturro</h3>
                <h3 className="eslogan_titulo">Desarrollador Frontend & Python</h3>
                <h3 className="corta_descripcion">"Código limpio, interfaces elegantes, experiencias fluidas."</h3>
            </div>
            <div className="sobre_mi">
                <h2>Sobre mi:</h2>
                <p className="texto_sobre_mi">"Soy desarrollador Frontend con experiencia en HTML, CSS, JavaScript, React, Electron y Python. Me apasiona crear soluciones innovadoras y trabajar en equipos dinámicos donde pueda aportar mis conocimientos y seguir aprendiendo. Actualmente, estudio Ingeniería en Informática en la Universidad Nacional Arturo Jauretche, con la intención de crecer profesionalmente y participar en todas las etapas del desarrollo de software. Desde chico, la tecnología siempre me llamó la atención. No solo me fascinaba lo que veía en las pantallas, sino que también sentía curiosidad por entender cómo funcionaba todo por detrás. Esa inquietud, que empezó como un simple hobby, con el tiempo se convirtió en una necesidad de profundizar en el desarrollo y hacer de esto mi profesión. Hoy, mi objetivo es seguir explorando y creando lo que hay detrás del "telón" digital."</p>
            </div>
        </div>
    )
} 

export default Presentacion