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
import Blogs from './component/Blogs';
import AddBlog from './component/AddBlog';
import UpdateBlog from './component/UpdateBlog';
import store from './store/store'
import { Provider } from 'react-redux';
import Contact from './component/Contact';
import Signup from './component/Signup';

function App() {
  return (
    <div className="App">

       
        <Router>

        <Menu />
        <Header />
     
            <Switch>
            
            
            <Route path="/services" component={Services} />
            <Route path="/post-service" component={Addservice} />  
            <Route path="/updateservice/:id" component={UpdateService} />
            <Route path="/offres" component={Offres} />
            <Route path="/add-offre" component={AddOffre}/>
            <Route path='/blogs' component={Blogs} />
            <Route path='/add-blog' component={AddBlog}  />
            <Route path='/update-blog/:id' component={UpdateBlog} />
            <Route path='/contact' component={Contact} />
            
            </Switch>

        </Router>
    </div>
  );
}
function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}
export default AppWithStore ;
