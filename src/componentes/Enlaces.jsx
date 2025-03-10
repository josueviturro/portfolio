

const Enlaces = () => {


    return(
        <div className="links_container">
            <button className="boton_link">
                <a href="https://github.com/josueviturro">
                    <div className="boton_content">
                        <p>GitHub</p>
                        <img src="/imagenes/github.png" className="logo" />
                    </div>
                </a>
            </button>
            <button className="boton_link">
                <a href="https://raw.githubusercontent.com/josueviturro/portfolio/main/public/CV_Viturro_Josue.pdf"><div className="boton_content">
                    <p>Descargar CV</p>
                </div></a>
            </button>
            <button className="boton_link">
                <a href="https://www.linkedin.com/in/josue-viturro/">
                    <div className="boton_content">
                        <p>LinkedIn</p>
                        <img src="/imagenes/linkedin.png" className="logo" />
                    </div>
                </a>
            </button>
        </div>
    )
}

export default Enlaces