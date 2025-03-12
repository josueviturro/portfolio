import data from "../data/data.json"

const Tarjetas = () => {
    return(
        <>{data.map((e) => (
            <div key={e.id} className="Tarjeta">
            <a className="link_tarjeta" href={e.link}><img className="imagen_tarjeta" src={e.imagen.foto} alt={e.imagen.nombre} /></a>
            <h3 className="tarjeta_titulo">{e.titulo}</h3>
            <p className="tarjeta_descripcion">{e.descripcion}</p>
            <div className="tarjetas_techs">
                {e.tecnologias.map((tech) => (
                    <img className="tarjeta_tech_icono" src={tech.icono} alt={tech.nombre} />
                ))}
            </div>
        </div>
        ))}
        </>
    )
}

export default Tarjetas