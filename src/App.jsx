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
  console.log(user);
    return(
        <>
          <Toaster position="bottom-right" toastOptions={{duration: 1500}}/>
            <Header/>
            <Routes>
              <Route path='/:username' element ={<UserPage/>}/>
              <Route path='/' element={<Home/>}/>
              <Route element= {user?<DashboardLayout/>:<Navigate to='/auth'/>}>
                <Route path="overview" index element={<Dashboard/>}/>
                <Route path="publish" element={<Publish/>}/>
                <Route path="followers" element={<Followers/>}/>
              </Route>
              <Route path="/auth" element={user?<Navigate to="/overview"/> :<AuthPage/>}/>
            </Routes>
        </>
  )
}

export default App;