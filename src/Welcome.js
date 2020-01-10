import React, { Component } from "react"
class Welcome extends Component {
   //Permet d'initialiser certaine valeurs de notre class
   constructor(){
      super();
      this.state = {
         count: 0
      }
   }

   //Méthode qui va permettre de décrementer le state
   removeOne(){
      this.setState({
         count: this.state.count - 1
      })
   }
   
   //Création d'une méthode qui va permettre d'incrémenter le state dans le constructor
   addOne(){
      this.setState({
         count: this.state.count + 1
      })
   }

   render(){
      return(
      <div class="container-fluid">
         <h1>Welcome {this.props.name} </h1>
         <p class= "display-4">Mon compteur: {this.state.count}</p>
         <button class="btn btn-primary" onClick={()=> this.addOne()}>Ajouter 1</button> 
         <button class="btn btn-primary" onClick={this.removeOne.bind(this)}>Enlèver 1</button>
      </div>
      
      )
   }
}

export default Welcome;
