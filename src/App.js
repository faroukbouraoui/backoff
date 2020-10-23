import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import Header from './component/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Services from './component/Services';
import Addservice from './component/Addservice';
import UpdateService from './component/UpdateService';
import Offres from './component/Offres';
import AddOffre from './component/AddOffre';


function App() {
  return (
    <div className="App">

       
        <Router>
        <Menu />
        <Header />
        

            <Switch>
            <Route path="/services" component={Services} />
            <Route path="/post-service" component={Addservice} />  
            <Route path="/updateservice" component={UpdateService} />
            <Route path="/offres" component={Offres} />
            <Route path="/add-offre" component={AddOffre}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
