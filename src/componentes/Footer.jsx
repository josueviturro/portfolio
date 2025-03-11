import { useState} from "react"
import emailjs from "emailjs-com"
import Swal from "sweetalert2";



const Footer = () => {
    const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
    const [mensajeEnviado, setMensajeEnviado] = useState(false);
    const [loading, setLoading] = useState(false);



    // Alertas //

    const mostrarAlerta = () => {
        Swal.fire({
            title: "Mensaje enviado",
            text: "Su mensaje fue enviado correctamente, en breve se contactaran con usted.",
            icon: "success",
            confirmButtonText: "Cerrar"
        });
    };

    const mostrarAlertaErrorCampos = () => {
        Swal.fire({
            title: "Faltan campos!",
            text: "Porfavor, complete todos los campos de contacto, de lo contrario no se enviara su mensaje",
            icon: "error",
            confirmButtonText: "Cerrar"
        });
    };

    const mostratAlertaErrorServer = () =>{
        Swal.fire({
            title:"Error al enviar el mensaje.",
            text: "Al parecer hay un error con Emailjs y no se pudo enviar el email, porfavor envia un email desde su propio email a josueviturro@gmail.com, muchas gracias",
            icon: "error",
            showConfirmButton:"Cerrar"
        })
    }

    // Alertas //

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.email || !formData.mensaje) {
            mostrarAlertaErrorCampos();
            return;
        }
        setLoading(true);

        // Datos que se enviarán a EmailJS
        const emailParams = {
            from_name: formData.nombre,
            from_email: formData.email,
            message: formData.mensaje,
        };

        // Datos que se enviarán a EmailJS //

        emailjs
            .send(
                "service_tzkx874",     // 🔥 Reemplaza con tu Service ID
                "template_ra7r55j",    // 🔥 Reemplaza con tu Template ID
                emailParams,
                "z9OZ5Y8t3rxS9RyXm"      // 🔥 Reemplaza con tu Public Key
            )
            .then(
                (response) => {
                    console.log("✅ Email enviado con éxito!", response);
                    mostrarAlerta()
                    setMensajeEnviado(true);
                    setTimeout(() => {
                        setMensajeEnviado(false);
                        setFormData({ nombre: "", email: "", mensaje: "" });
                        setLoading(false);
                    }, 0);
                },
                (error) => {
                    console.error("❌ Error enviando email:", error);
                    mostratAlertaErrorServer();
                    setLoading(false);
                }
            );
    };




    return(
    <div className="footer_container">
        <div className="footer_bg">
            <div className="footer_links_container">
                <h2 className="footer_links_titulo">Informacion util</h2>
                <ul className="footer_ul">
                    <li>Email: Josueviturro@gmail.com</li>
                    <li>Linkedin: <a href="https://www.linkedin.com/in/josue-viturro/">Click Aqui!</a></li>
                    <li>GitHub: <a href="https://github.com/josueviturro">Click Aqui!</a></li>
                </ul>
            </div>
            <div className="footer_form_container">
                <div className="form_container">
                    <h3>Envíame un mensaje</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Tu Nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="input_format"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Tu Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input_format"
                            />
                            <textarea
                                name="mensaje"
                                placeholder="Escribe tu mensaje..."
                                value={formData.mensaje}
                                onChange={handleChange}
                                className="input_format_area"
                            ></textarea>
                            <button type="submit" className="boton_link"> {loading ? "Enviando..." : "Enviar"}</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer