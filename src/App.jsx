import Header from './components/Header.jsx'
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import DashboardLayout from "./Dashboard/DashboardLayout.jsx"
import Dashboard from "./Dashboard/Dashboard.jsx";
import Publish from "./Dashboard/main/Publish.jsx"
import {Routes,Route,Outlet} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

axios.defaults.baseURL= "https://localhost:8000";
axios.defaults.withCredentials = "true";

function App(){
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<DashboardLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="/Publish" element={<Publish/>}/>
            </Route>
                <Route path='/Signup' element={<Signup/>}/>
                <Route path='/Login' element={<Login/>}/>
            </Routes>
        </>
  )
}

export default App;