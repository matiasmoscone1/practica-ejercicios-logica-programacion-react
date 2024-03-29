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
import ObjetosValor from './ejercicios/ObjetosValor';
import MultiplicaPor2 from './ejercicios/MultiplicaPor2';
import EliminarElementos from './ejercicios/EliminarElementos';
import LongitudPalabras from './ejercicios/LongitudPalabras';
import SumaDePares from './ejercicios/SumaDePares';
import EliminaDuplicados from './ejercicios/EliminaDuplicados';
import ConteoElementos from './ejercicios/ConteoElementos';
import MinimoMaximo from './ejercicios/MinimoMaximo';
import SumaDeArrays from './ejercicios/SumaDeArrays';
import ReduccionDeCadenas from './ejercicios/ReduccionDeCadenas';
import SumaReduce from './ejercicios/SumaReduce';
import CuentaElementos from './ejercicios/CuentaElementos';
import MapeoDePalabras from './ejercicios/MapeoDePalabras';
import SumaNumerosPares from './ejercicios/SumaNumerosPares';
import DuplicadosReduce from './ejercicios/DuplicadosReduce';
import CuentaElementoReduce from './ejercicios/CuentaElementoReduce';
import SumaMatricesReduce from './ejercicios/SumaMatricesReduce';
import FiltraElementosReduce from './ejercicios/FiltraElementosReduce';
import CalcularPromedioReduce from './ejercicios/CalculoPromedioReduce';
import AgrupaDatos from './ejercicios/AgrupacionDeDatos';
import FlattenDeArreglos from './ejercicios/FlattenArreglo';
import ComponenteFuncional from './ejercicios/ComponenteFuncional';
import RenderizadoCondicional from './ejercicios/RenderizadoCondicional';
import ComponenteFormulario from './ejercicios/ComponenteFormulario';
import ContadorUseReducer from './ejercicios/ContadorUseReducer';
import HookPersonalizadoUseLocalStorage from './ejercicios/HookPersonalizadoUseLocalStorage';
import ListaTareasReducer from './ejercicios/ListaTareasReducer';
import GestionFormularioReducer from './ejercicios/GestionFormularioReducer';
import ListaComprasReducer from './ejercicios/ListaComprasReducer';
import Botones_Fin_Inicio from './ejercicios/Botones_Fin_Inicio';
import Navbar from './ejercicios/Navbar';

function App() {

  const arrayNumeros = [1, 2, 5, 7, 8];

  return (
    <>
    
    
    <h1>Ejercicios practicos con React JS</h1>

   
    <div className='componentes-container'>
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
    <ObjetosValor />
    <MultiplicaPor2 />
    <EliminarElementos />
    <LongitudPalabras />
    <SumaDePares />
    <EliminaDuplicados />
    <ConteoElementos />
    <MinimoMaximo />
    <SumaDeArrays />
    <ReduccionDeCadenas />
    <SumaReduce />
    <CuentaElementos />
    <MapeoDePalabras />
    <SumaNumerosPares />
    <DuplicadosReduce />
    <CuentaElementoReduce />
    <SumaMatricesReduce />
    <FiltraElementosReduce />
    <CalcularPromedioReduce />
    <AgrupaDatos />    
    <FlattenDeArreglos />
    <ComponenteFuncional arr={arrayNumeros}/>
    <RenderizadoCondicional />
    <ComponenteFormulario />
    <ContadorUseReducer />
    <HookPersonalizadoUseLocalStorage />
    <ListaTareasReducer />
    <GestionFormularioReducer />
    <ListaComprasReducer />
    <Navbar />



    </div>
    </>


    
  )
}

export default App;
