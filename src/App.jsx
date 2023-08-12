import { useState } from 'react'
import Contador from './ejercicio-1/Contador';
import ContadorClicks from './ejercicio-1/ContadorClicks';
import ListaElementos from './ejercicio-1/ListaElementos';
import OcultarTexto from './ejercicio-1/OcultarTexto';

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
    
    </>
  )
}

export default App;
