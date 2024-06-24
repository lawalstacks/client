import Header from './components/Header.jsx'
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import {Routes,Route} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

axios.defaults.baseURL= "https://localhost:8000";
axios.defaults.withCredentials = "true";

function App(){
    return(
        <>
            <Header/>
            <Routes>
                <Route path='/' />
                <Route path='/Signup' element={<Signup/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Dashboard' element={<Dashboard/>}/>
            </Routes>
        </>
  )
}

export default App
