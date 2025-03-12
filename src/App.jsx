import Background from "./componentes/Background"
import Presentacion from "./componentes/Presentacion"
import Proyectos from "./componentes/Proyectos"
import Enlaces from "./componentes/Enlaces"
import Footer from "./componentes/Footer"
import Carga from "./componentes/Carga"
import Techs from "./componentes/Techs"

function App() {


  return (
    <>
      <Carga/>
      <Background />
      <Presentacion />
      <Techs/>
      <Proyectos />
      <Enlaces />
      <Footer />
    </>
  );
};

export default App
