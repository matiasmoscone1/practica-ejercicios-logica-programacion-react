import { useState } from 'react'
import Contador from './ejercicios/Contador';
import ContadorClicks from './ejercicios/ContadorClicks';
import ListaElementos from './ejercicios/ListaElementos';
import OcultarTexto from './ejercicios/OcultarTexto';
import CalculadoraSimple from './ejercicios/CalculadoraSimple';
import ConversorMonedas from './ejercicios/ConversorMonedas';

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

    </>
  )
}

export default App;
