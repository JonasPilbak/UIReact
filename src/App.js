<<<<<<< HEAD

import './App.css';


import IdeaPage from "./Components/IdeaPage";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import BrowsePage from "./Components/BrowsePage";

import InputPage from "./Components/InputPage";
import Sidebar from "./Components/Sidebar";
import ApiFetch from './Components/ApiFetch';
import PostManPost from "./Components/postManPost";
import "./Components/sidebar.css";
import "./App.css";
import Manager from "./Components/Manager";
import FetchIdeas from "./Components/FetchIdeas";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
       <Sidebar/>
       </div>
      <Switch>
       
      
      <Route exact path="/" component={IdeaPage}></Route>
    
      <Route exact path="/Browse" component={BrowsePage}></Route>
     
            
            <Route exact path="/overview" component={ApiFetch}></Route>

            <Route exact path="/managerLogin" component={Manager}></Route>
            
      </Switch>

      </Router>


    
    </div>
  );
}

export default App;
=======

import './App.css';

import ManagerLogin from "./Components/ManagerLogin";
import IdeaPage from "./Components/IdeaPage";
import {BasicTable} from "./Components/BasicTable";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import BrowsePage from "./Components/BrowsePage";
import TableFetch from "./Components/TableFetch";

import ApiFetch from './Components/ApiFetch';


function App() {
  return (
    <div className="App">
      <Router>
      
      <Switch>
      
      <Route exact path="/" component={IdeaPage}></Route>
    
      <Route exact path="/Browse" component={BrowsePage}></Route>
     
            
            <Route exact path="/overview" component={ApiFetch}></Route>

            <Route exact path="/managerLogin" component={ManagerLogin}></Route>
            
      </Switch>

      </Router>


    
    </div>
  );
}

export default App;
>>>>>>> 9fd8523aa2bd504cd014cc7219c9e12c5242609d
