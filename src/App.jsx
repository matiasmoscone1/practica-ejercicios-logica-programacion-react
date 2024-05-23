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
import ApiToDo from './ejercicios/ApiToDo';

import { themeContext } from './ejercicios/CambiaTema';
import { useContext } from 'react';

function App() {

  const arrayNumeros = [1, 2, 5, 7, 8];


  const scrollEnY = window.scrollY;

  console.log(scrollEnY);

  const tema = useContext(themeContext);


  return (
    <>

    {tema && <h1>ESTOY PROBNADO USECONTEXT</h1>}
    
    <div className='title-container'>
      <h1>Ejercicios practicos con React JS</h1>
    </div>

   
    <div className='componentes-container'>
      
      <Navbar />

      <section>
        <Contador />
      </section>
      <section>
        <ListaElementos/>
      </section>
      <section>
        <ContadorClicks />
      </section>
      <section>
        <OcultarTexto />
      </section>
      <section>
        <CalculadoraSimple />
      </section>
      <section>
        <ConversorMonedas />
      </section>  
      <section>
        <MostrarHora />
      </section>
      <section>
        <VisualizarImagen />        
      </section>
      
      <section>
        <Temporizador />
      </section>  
        <ListaDinamica />
      <section>
        <FiltroDeTareas />
      </section>

      <section>
        <ValidarFormulario />
      </section>

      <section>
        <OrdenarDatos />
      </section>

      <section>
        <TarjetaInteractiva />
      </section>
      
      <section>
        <SumarArray />
      </section>

      <section>
        <ObjetosValor />
      </section>

      <section>
        <MultiplicaPor2 />
      </section>

      <section>
        <EliminarElementos />
      </section>

      <section>
        <LongitudPalabras />
      </section>

      <section>
        <SumaDePares />
      </section>

      <section>
        <EliminaDuplicados />
      </section>

      <section>
        <ConteoElementos />
      </section>

      <section>
        <MinimoMaximo />
      </section>

      <section>
        <SumaDeArrays />
      </section>

      <section>
        <ReduccionDeCadenas />
      </section>

      <section>
        <SumaReduce />
      </section>

      <section>
        <CuentaElementos />
      </section>

      <section>
        <MapeoDePalabras />
      </section>

      <section>
        <SumaNumerosPares />
      </section>

      <section>
        <DuplicadosReduce />
      </section>

      <section>
        <CuentaElementoReduce />
      </section>

      <section>
        <SumaMatricesReduce />
      </section>

      <section>
        <FiltraElementosReduce />
      </section>

      <section>
        <CalcularPromedioReduce />
      </section>

      <section>
        <AgrupaDatos />    
      </section>

      <section>
        <FlattenDeArreglos />
      </section>

      <section>
        <ComponenteFuncional arr={arrayNumeros}/>
      </section>

      <section>
        <RenderizadoCondicional />
      </section>

      <section>
        <ComponenteFormulario />
      </section>

      <section>
        <ContadorUseReducer />
      </section>

      <section>
        <HookPersonalizadoUseLocalStorage />
      </section>

      <section>
        <ListaTareasReducer />
      </section>

      <section>
        <GestionFormularioReducer />
      </section>

      <section>
        <ListaComprasReducer />
      </section>

      <div className='section-apitodo'>
        <ApiToDo />
      </div>

   
  
  
    </div>
    </>


    
  )
}

export default App;
