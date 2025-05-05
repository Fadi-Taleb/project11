import { useState } from "react";
function Utilisateur() {
    const [user, setUser] = useState(
        {
            nom: 'fadi',
            prenom:'taleb',
            age:23
        }
    )
    const changer=(e)=>{
        const {name,value} =e.target
        setUser(prUser =>({...prUser,[name]: value}))
    } 
    return(
        <div>
            <input type="text" name="nom" onChange={changer}/>
            <input type="text" name="prenom" onChange={changer}/>
            <input type="number" name="age" onChange={changer}/>
            <p> Utilisateur est :{user.prenom},{user.nom},{user.age}</p>
        </div>
    )  
}
export default Utilisateur;