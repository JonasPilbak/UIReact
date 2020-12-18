import React, { Component } from 'react';
import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:46897/api'
})



class PostManPost extends Component {

    
    constructor() {
        super();
        this.state = {
            ideas: []
           
           
        }
      
        
    }
    componentDidMount() {

        api.get('/ideas').then(res => {
            console.log(res.data)
            this.setState({ideas: res.data})
        })
     
    }

    createIdea = async () => {
        let res = api.post('/ideas', {title: "test2"})
        console.log(res)
    }
   
   
    render() { 
        return ( 
            <div>
                <button onClick={this.createIdea}>Create IDea</button>
                    {this.state.ideas.map(idea => 
                        <h2 key={idea.ideaID}>{idea.title}</h2>
                    )}
            </div>
         );
    }
}
 
export default PostManPost;