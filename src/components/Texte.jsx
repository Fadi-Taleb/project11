import React, {Component} from "react";


class Texte extends Component {
    constructor() {
        super()
        this.state={
            Text:''
        }
    }

changer=(e)=>{
    this.setState({text:e.target.value})
}

render(){
    return(
        <div> 
            <p> bien </p>
            <h1> fadi </h1>
            <input type="text" value={this.state.value} onChange={this.changer} />
            <p> vous avez saisir:{this.state.text}</p>

        </div>
    )
}
}
export default Texte;
