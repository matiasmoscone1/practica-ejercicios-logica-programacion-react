
import { useContext } from 'react';
import { themeContext } from "../App";

const CambiaTema = () => {

    const tema = useContext(themeContext);

    return(<>
        <div>
          {tema && <h1>ESTOY PROBNADO USECONTEXT</h1>}
        </div>
    </>)


}


export default CambiaTema;






