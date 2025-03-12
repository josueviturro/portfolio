import { useState,useEffect,useRef } from "react";
import tech from "../data/techs.json"

const Techs = () => {

    const techsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>{
                if (entries[0].isIntersecting){
                    setIsVisible(true)
                }
            },
            {threshold: 0.1});
        if(techsRef.current){
            observer.observe(techsRef.current);
        }

        return() => {
            if (techsRef.current){
                observer.unobserve(techsRef.current);
            }
        }
    }, [])

    return(
    <div ref={techsRef}  className={`techs-container ${isVisible ? "show" : ""}`}>
        <h1>Tecnologias que uso</h1>
        <div className="techs_bg">
            {tech.map((e) => (
                <div key={e.id} className="tech_card">
                    <img className="techs_icon_imagen" src={e.imagen} alt={e.titulo} />
                    <h2 className="tech_titulo">{e.titulo}</h2>
                </div>
            ))}
        </div>
    </div>)
}

export default Techs