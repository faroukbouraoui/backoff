import React, { useEffect, useState } from 'react';

import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import store from './store/store'
import { Provider } from 'react-redux';


import AuthApi from "./utils/AuthApi"
import Routes from './routes/Routes';
import {hasSignned} from'./component/auth-api'

function App() {
  const [auth, setAuth] = useState(false)
  const readSession = async ()=>{
    const res = await hasSignned();
    if(res.data.auth){
      setAuth(true)
    }
  }
  useEffect(() => {
    readSession()
  }, [])

  return (
    <div className="App">

       <AuthApi.Provider value={{auth, setAuth }}>
       
        <Router>
            <Switch>
             
              <Routes />
            
            </Switch>

        </Router>
        </AuthApi.Provider>
    </div>
  );
}
function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}
export default AppWithStore ;
