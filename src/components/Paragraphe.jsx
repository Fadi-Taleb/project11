import { useState } from "react";

function Paragraphe() {
   const[paragraphe, setParagraph]=
   useState("");
   const copier = (e) =>{
    setParagraph(e.target.value);
   }
   return(
    <div>
        <input type="text" name="paragraphe" placeholder="Faites entre un paragraphe" onClick={copier}
        />
        <p> vous avez saisi : {paragraphe}</p>
    </div>
   )
}
export default Paragraphe;