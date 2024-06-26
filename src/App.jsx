import Header from './components/Header.jsx'
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import DashboardLayout from "./pages/Dashboard/DashboardLayout.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Publish from "./pages/Dashboard/main/Publish.jsx"
import Followers from "./pages/Dashboard/main/Followers.jsx"
import {Routes,Route} from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL= "https://localhost:5000/api";
axios.defaults.withCredentials = "true";

function App(){
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<DashboardLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="/Publish" element={<Publish/>}/>
                    <Route path="/Followers" element={<Followers/>}/>
            </Route>
                <Route path='/Signup' element={<Signup/>}/>
                <Route path='/Login' element={<Login/>}/>
            </Routes>
        </>
  )
}

export default App;