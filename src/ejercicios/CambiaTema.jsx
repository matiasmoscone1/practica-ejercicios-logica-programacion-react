
import { useContext } from 'react';
import { themeContext } from "../App";

const CambiaTema = () => {

    const tema = useContext(themeContext);

    return(<>
          {tema && <h1>ESTOY PROBNADO USECONTEXT</h1>}

    </>)


}


export default CambiaTema;






