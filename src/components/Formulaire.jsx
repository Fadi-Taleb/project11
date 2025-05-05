import React, { Component } from 'react';

class Formulaire extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      message: '',
      envoye:'flase',
    };
  }

 change=(event)=>
 {
    //reccuperation des proprctes:
    const {name,value}=event.target
    //recupere la value nouvel value
    this.setState({[name]:value})
 }

envoye=()=>
{
   this.setState({envoye:true})
}
render()
{
    return(
        <div>
        <input type='text' name='email'
        onChange={this.change}/>


        <input type='text' name='password'
        onChange={this.change}/>


        <input type='text' name='message'
        onChange={this.change}/>


        <button type='submit' onClick={this.change}>
    click
        </button>
        </div>  
    )  
}
}
export default Formulaire; 