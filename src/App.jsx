import Header from './components/Header.jsx'
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import AuthPage from "./pages/AuthPage.jsx"
import UserPage from "./pages/UserPage.jsx";
import Home from "./pages/Home.jsx"
import DashboardLayout from "./pages/Dashboard/DashboardLayout.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Publish from "./pages/Dashboard/main/Publish.jsx"
import Followers from "./pages/Dashboard/main/Followers.jsx"
import {Routes,Route,Navigate} from "react-router-dom";
import axios from "axios";
import {useRecoilValue} from "recoil"
import userAtom from './atoms/userAtom.js'
import {Toaster} from 'react-hot-toast';

axios.defaults.baseURL= "http://localhost:3000";
axios.defaults.withCredentials = "true";

function App(){
  const user = useRecoilValue(userAtom);
    return(
        <>

            <Header/>
          <Toaster position="bottom-right" toastOptions={{duration: 2000}}/>
            <Routes>
              <Route path='/:username' element ={<UserPage/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path="/dashboard" element={user? <DashboardLayout/>: <Navigate to="/auth"/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="publish" element={<Publish/>}/>
                <Route path="followers" element={<Followers/>}/>
              </Route>
              <Route path="/auth" element={user? <Navigate to="/dashboard"/> : <AuthPage/>}/>
            </Routes>
        </>
  )
}

export default App;