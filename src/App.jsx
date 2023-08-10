import { useState } from 'react'
import Contador from './ejercicio-1/Contador';
import ContadorClicks from './ejercicio-1/ContadorClicks';
import ListaElementos from './ejercicio-1/ListaElementos';

function App() {

  return (
    <>
    <div>
      <h1>Ejercicios practicos con React</h1>
    </div>

    <Contador />
    <ListaElementos/>
    <ContadorClicks />
    
    </>
  )
}

export default App;
