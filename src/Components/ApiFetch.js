<<<<<<< HEAD
import axios from 'axios';
import React from 'react';
import "./table.css"



class ApiFetch extends React.Component {

  
 
    constructor(props) {

        super(props);

        this.state = {
            items: []
           
           
        }

        
    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        axios.get('http://localhost:46897/api/Ideas')
        .then(response => response.data)
        .then((data) => {
            this.setState({items: data});
        });
        
     
    }
    


deleteTitle = (itemID) => {
axios.delete('http://localhost:46897/api/Ideas/'+itemID)
.then(response => {
    if(response.data != null){
       
        this.setState({
            items: this.state.items.filter(item => item.ideaID !==itemID)
        });
    }

});
};

    /**
     * render
     *
     * Render UI
     */
    render() {

       

       

        return (
            <div  className="Api">

              <table className="container">
                <tbody>
                  <tr>

                             <th>Title</th>
                            <th>Tag</th>
                            <th>Description</th>
                            
                            <th>Delete</th>
                  </tr>
                    {this.state.items.map((item) => (
                        <tr className="items" key={item.ideaID}>
                          
                           

                             <td className="titles">{item.title}</td>
                            
                            <td>  {item.description}</td>
                          
                            <td> {item.text}</td>
                        
                            <td className="right_row" id="button">
                                <button className="delete_button" onClick={this.deleteTitle.bind(this, item.ideaID)}>Delete</button>
                            </td>
                          
                        </tr>
                        
                    ))}
                    </tbody>
                </table>
               
            </div>
        );

    }

}

=======
import React from 'react';
import "../Api.css";




class ApiFetch extends React.Component {

  
 
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('http://localhost:46897/api/Ideas')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    

    /**
     * render
     *
     * Render UI
     */
    render() {

        const  { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div  className="Api">

               
              

              
              <table className="container">
                
                  <tr>

              <th>Title</th>
                            <th>Description</th>
                            <th>Text</th>
                            <th>Key</th>
                  </tr>
                    {items.map(item => (
                        <tr className="items" key={item.ideaID}>
                          
                           

                             <td className="titles">{item.title}</td>
                            
                           
                            
                           

                            <td>  {item.description}</td>
                          
                           

                            <td> {item.text}</td>
                        
                          
                                
                            <td>     {item.ideaID}</td>
                            <td className="right_row">
                                <button className="delete_button">Delete</button>
                            </td>
                          
                           {/* <div id="Name"> ideaID: {item.ideaID}</div> 
                           <div id="Email"> companyID: {item.companyID}</div>
                           <div id="Name"> userID: {item.userID}</div> 
                           <div id="Email"> priorityID: {item.priorityID}</div>
                           <div id="Name"> ideaStatusID: {item.ideaStatusID}</div> 
                           <div id="Email"> title: {item.title}</div>
                           <div id="Name"> description: {item.description}</div> 
                           <div id="Email"> text: {item.text}</div> */}
                        </tr>
                        
                    ))}
                    
                </table>
               
            </div>
        );

    }

}

>>>>>>> 9fd8523aa2bd504cd014cc7219c9e12c5242609d
export default ApiFetch;