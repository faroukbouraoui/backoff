import React, { Component } from 'react'
import {
    BrowserRouter as
    Router,
    Switch,
    Route,
    Redirect
   
  } from "react-router-dom";
import SignIn from '../component/SignIn';
import SignUp from '../component/Signup';
import Services from '../component/Services';
import Addservice from '../component/Addservice';
import UpdateService from '../component/UpdateService';
import Offres from '../component/Offres';
import AddOffre from '../component/AddOffre';
import Blogs from '../component/Blogs';
import AddBlog from '../component/AddBlog';
import UpdateBlog from '../component/UpdateBlog';
import Contact from '../component/Contact';
import AuthApi from '../utils/AuthApi'
import Menu from '../component/Menu';
import Home from '../component/Home';



function Routes() {
    return (
        <Router >
        
        <Switch>
        <RouteRegistration path="/signin" component={SignIn} />
        <RouteRegistration path="/signup" component={SignUp} />
        <RouteProtected  path= "/home" component={Home} />
        <RouteProtected  path="/services" component={Services} />
        <RouteProtected  path="/post-service" component={Addservice} />  
        <RouteProtected path="/updateservice/:id" component={UpdateService} />
        <RouteProtected path="/offres" component={Offres} />
        <RouteProtected path="/add-offre" component={AddOffre}/>
        <RouteProtected path='/blogs' component={Blogs} />
        <RouteProtected path='/add-blog' component={AddBlog}  />
        <RouteProtected path='/update-blog/:id' component={UpdateBlog} />
        <RouteProtected path='/contact' component={Contact} />
        </Switch>
        </Router>
    )
}

const RouteRegistration = ({component: Component, ...rest})=>{
    const authApi = React.useContext(AuthApi)
    return <Route
            {...rest}
            render={(props)=>!authApi.auth ? (
                <Component {...props}/>
            ) :<Redirect to="/home"/>}/>
}
const RouteProtected = ({component: Component, ...rest})=>{
    const authApi = React.useContext(AuthApi)

    return <Route
            {...rest}
            render={(props)=>authApi.auth ?(
                <Component {...props}/>
            ) :<Redirect to="/signin" /> }/>
}

export default Routes
