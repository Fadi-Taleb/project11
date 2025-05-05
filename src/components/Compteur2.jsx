import { useState } from "react";

function Compteur2(){
    const [compteur, setCompteur]= useState(0)
    const incrementer = () => {
        setCompteur(comt => +1);
    }
const reset = () =>{
    setCompteur(0);
};
return(
    <div>
    <button onClick={incrementer}>changer
    </button>

    <button onClick={reset}>changer
    </button>
    
    </div>

)
}
export default Compteur2