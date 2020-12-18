<<<<<<< HEAD
import React, { Component } from 'react';


class InputPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {

        fetch('http://localhost:46897/api/users')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }
    render() { 
        const  { isLoaded, items } = this.state;
        
        if (!isLoaded)
        return <div>Loading...</div>;
        else{

        
            return(

                <div>
                    <ul>
                    {items.map(item => 
                        <li key={item.userID}>{item.name}</li>
                      
                        )}
                    
                    
                    
                    
                   

                    </ul>

                </div>
            )
       
        
    }
}
}
 
=======
import React, { Component } from 'react';
import PostForm from "./PostForm";

class InputPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <PostForm/>

            </div>
          );
    }
}
 
>>>>>>> 9fd8523aa2bd504cd014cc7219c9e12c5242609d
export default InputPage;