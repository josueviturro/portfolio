
const Background = () => {


    return(
    <>
        <video autoPlay loop muted playsInline className="bg">
            <source src="/video/Fondo_Web.mp4" type="video/mp4" className="video2"/>
        </video>
        <div className="overlay"></div>
    </>
    )
}

export default Background