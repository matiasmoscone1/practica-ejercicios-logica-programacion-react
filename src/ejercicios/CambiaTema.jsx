
import { useContext } from 'react';
import { themeContext } from "../App";

const CambiaTema = () => {

    const tema = useContext(themeContext);

    if(tema){
      document.body.style.backgroundColor = "#000000";
      document.body.style.color = "#FFFFFF";
      
    }else{
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#000000";
    }


    return(<>
        <div>
          {tema && <h1>ESTOY PROBANDO USECONTEXT</h1>}
        </div>
    </>)


}


export default CambiaTema;






