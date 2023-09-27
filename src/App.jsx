import { useState } from 'react'
import Contador from './ejercicios/Contador';
import ContadorClicks from './ejercicios/ContadorClicks';
import ListaElementos from './ejercicios/ListaElementos';
import OcultarTexto from './ejercicios/OcultarTexto';
import CalculadoraSimple from './ejercicios/CalculadoraSimple';
import ConversorMonedas from './ejercicios/ConversorMonedas';
import MostrarHora from './ejercicios/MostrarHora';
import VisualizarImagen from './ejercicios/VisualizarImagen';
import Temporizador from './ejercicios/Temporizador';
import ListaDinamica from './ejercicios/ListaDinamica';
import FiltroDeTareas from './ejercicios/FiltroDeTareas';
import ValidarFormulario from './ejercicios/ValidarFormulario';
import OrdenarDatos from './ejercicios/OrdenarDatos';
import TarjetaInteractiva from './ejercicios/TarjetaInteractiva';
import SumarArray from './ejercicios/SumarArray';

function App() {

  return (
    <>
    <div>
      <h1>Ejercicios practicos con React</h1>
    </div>

    <Contador />
    <ListaElementos/>
    <ContadorClicks />
    <OcultarTexto />
    <CalculadoraSimple />
    <ConversorMonedas />
    <MostrarHora />
    <VisualizarImagen />
    <Temporizador />
    <ListaDinamica />
    <FiltroDeTareas />
    <ValidarFormulario />
    <OrdenarDatos />
    <TarjetaInteractiva />
    <SumarArray />
    </>
  )
}

export default App;
