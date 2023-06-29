import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './componentes/navbar.jsx'
import Slider from './componentes/slider'
import Proyecto from './componentes/proyectos'
import Videojuego from './componentes/videojuego'
import Integrantes from './componentes/integrantes'
import Comentarios from './componentes/comentarios'
import Fotter from './componentes/fotter'

function App() {


  return (

    <div>

      <Navbar />

      <Slider />

      <Proyecto infoproyecto = "Taiga es un proyecto enfocado a la conservación de zonas  verdes o boscosas, nos centramos en el bosque de Monte Carlo ubicado en Manrique Jardin para ser enfasis en el poco cuidado que recibe este y fomentar el cuidado de los bosques.Queremos incentivar a futuras generaciones para que cuiden el medio ambiente y los arboles que son nuetra principal fuente de oxigeno en el ambiente, esto se tiene pensado en mensajes, campañas y directos habando sobre los impactos ambientales que generan desastres tales como deforestacion, incendios, catastrofes naturales, etc."/>

      <Videojuego informacion = "Lider de grupo y programador, su fuerte es la creacion de contenido en el ambito de programacion de paginas web, diseño de landing pages y uso de variables." />

      <Integrantes integrantesproyecto = "El diseñador del grupo, su fuerte es la creacion de personajes, paisajes y mucho mas, tiene muy bien estructurada su linea en diseño grafico" />

      <Comentarios />

      <Fotter imagen = "./img/Logo Normal color blanco.png" />

    </div>

  )
}

export default App
