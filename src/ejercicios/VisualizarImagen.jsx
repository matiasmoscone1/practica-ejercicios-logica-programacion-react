

import { useState } from "react";


//8. Visualizador de Imágenes: Crea un componente de React que muestre una lista de 
//imágenes en miniatura. Al hacer clic en una imagen, se debe mostrar la imagen en 
//tamaño completo.


const VisualizarImagen = () => {
   
    const [url, setUrl] = useState("src/imagenes/img1.jpg");


    const ImagenMaximizada = () => {

        return(<div>
            <img className="imagen-maximizada-ej-8" src={url} />
        </div>)
    }

    const cambioUrl = (cadena) => {
        setUrl(cadena);
    }

    //console.log(url);


    return(<>
        <h2>8. Visualizador de imagenes</h2>
        
        <div className="contenedor-ej-8">
             <ImagenMaximizada />    
            <div className="imagen-container-ej-8">
                <img className="img-ej-8" src="src\imagenes\img1.jpg" onClick={() => {cambioUrl("src/imagenes/img1.jpg")}}/>
                <img className="img-ej-8" src="src\imagenes\img2.jpg" onClick={() => {cambioUrl("src/imagenes/img2.jpg")}}/>
                <img className="img-ej-8" src="src\imagenes\img3.jpg" onClick={() => {cambioUrl("src/imagenes/img3.jpg")}}/>
                <img className="img-ej-8" src="src\imagenes\img4.jpg" onClick={() => {cambioUrl("src/imagenes/img4.jpg")}}/>
            </div>
        </div>   
    </>)


}

export default VisualizarImagen;


