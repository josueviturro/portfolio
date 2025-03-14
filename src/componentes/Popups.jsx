import pop from "../data/popup_data.json"

const Popups= () => {

    return(
        <>
        <div className="popup_container">
            {pop.map((e) =>(
            <a key={e.id} href={e.link} target="_blank" rel="noopener noreferrer"><img src={e.imagen} alt="Whatsapp"  className="popup_img" /></a>
        ))}
        </div>
        </>
    )
}

export default Popups