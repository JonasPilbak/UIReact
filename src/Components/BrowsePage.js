<<<<<<< HEAD
import React, { Component } from 'react';
import PostForm from "./PostForm";
import ApiFetch from "./ApiFetch";
import Sidebar from './Sidebar';
import NewPost from "./NewPost";
import "../BrowsePage.css";
import FetchIdeas from "./FetchIdeas";

class BrowsePage extends Component {
    
    render() { 
        return ( 
            <div className="BrowsePage">
           
           
         

            <div className="table_display">

                <FetchIdeas/>
            </div>


            </div>
        
            

         );
    }
}
 
=======
import React, { Component } from 'react';
import PostForm from "./PostForm";
import ApiFetch from "./ApiFetch";
import Sidebar from './Sidebar';
import "../BrowsePage.css";
class BrowsePage extends Component {
    
    render() { 
        return ( 
            <div className="BrowsePage">
             <Sidebar/>
           
            <div className="Post">
            
           
            
            </div>
            <div className="table_display">

            <ApiFetch/>
            </div>
1
            </div>

            

         );
    }
}
 
>>>>>>> 9fd8523aa2bd504cd014cc7219c9e12c5242609d
export default BrowsePage;