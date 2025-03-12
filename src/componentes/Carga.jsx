import { useState,useEffect } from "react";

const Carga = () => {

    const [cargar,setCarga] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCarga(false)
        },5000)
        return () => clearTimeout(timer)
    },[])

    return (
        <div className={`carga ${cargar ? "" : "hidden"}`}>
            <h1 className="carga_texto">Pagina Cargando...</h1>
        </div>
    )
}

export default Carga