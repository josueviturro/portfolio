import { useEffect, useRef, useState } from "react";
import Tarjetas from "./Tarjetas"

const Proyectos = () => {

    const proyectosRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>{
                if (entries[0].isIntersecting){
                    setIsVisible(true)
                }
            },
            {threshold: 0.1});
        if(proyectosRef.current){
            observer.observe(proyectosRef.current);
        }

        return() => {
            if (proyectosRef.current){
                observer.observe(proyectosRef.current);
            }
        }
    }, [])



    return(
        <div ref={proyectosRef} className={`proyectos_container ${isVisible ? "show" : ""}`}>
            <h1 className="proyectos_titulo">Desarrollos</h1>
            <div className="proyectos_tarjetas_container">
                <Tarjetas/>
                <Tarjetas/>
                <Tarjetas/>
            </div>
        </div>
    )
}

export default Proyectos