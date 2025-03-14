import Background from "./componentes/Background"
import Presentacion from "./componentes/Presentacion"
import Proyectos from "./componentes/Proyectos"
import Enlaces from "./componentes/Enlaces"
import Footer from "./componentes/Footer"
import Carga from "./componentes/Carga"
import Techs from "./componentes/Techs"
import Popups from "./componentes/Popups"

function App() {


  return (
    <>
      <Popups/>
      <Carga/>
      <Background />
      <Presentacion />
      <Techs/>
      <Proyectos />
      <Footer />
    </>
  );
};

export default App
