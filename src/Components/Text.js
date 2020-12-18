<<<<<<< HEAD
import React, { Component } from 'react';
import "../App.css"

class Text extends Component {
    constructor(){
        super();
 
        this.state = {
         
        
        }
   }
 
   handleCheckbox(e){
     this.setState({checkbox: e.target.checked})
   
   }
 
   handleInput(e){
     this.setState({inputValue: e.target.value})
   }
 
    render() { 
        return ( 

            <div>
           
             <input  type="checkbox" onChange={this.handleCheckbox.bind(this)} checked={this.state.checkbox}/>
            
          </div>
         );
    }
}
 
=======
import React, { Component } from 'react';
import "../App.css"

class Text extends Component {
    constructor(){
        super();
 
        this.state = {
         checkbox: false,
        
        }
   }
 
   handleCheckbox(e){
     this.setState({checkbox: e.target.checked})
   
   }
 
   handleInput(e){
     this.setState({inputValue: e.target.value})
   }
 
    render() { 
        return ( 

            <div>
           
             <input  type="checkbox" onChange={this.handleCheckbox.bind(this)} checked={this.state.checkbox}/>
            
          </div>
         );
    }
}
 
>>>>>>> 9fd8523aa2bd504cd014cc7219c9e12c5242609d
export default Text;