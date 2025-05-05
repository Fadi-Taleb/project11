import React, {useState} from "react";

function Compteur() {
    const[compteur, setCompteur]= useState(0)
  const incrementer = ()=>{
    setCompteur(compteur + 10);
  }
   return(
        <div> <p> la valeur du Compteur {compteur} </p>

        <button onClick={incrementer}>changer

        </button>
        </div>
    )};
export default Compteur;