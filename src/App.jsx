import Header from './components/Header.jsx'
import AuthPage from "./pages/AuthPage.jsx"
import UserPage from "./pages/UserPage.jsx";
import Home from "./pages/Home.jsx"
import DashboardLayout from "./pages/Dashboard/DashboardLayout.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import PublishCard from "./pages/Dashboard/main/PublishCard.jsx"
import ForgotPassword from './components/ForgotPassword.jsx';
import Followers from "./pages/Dashboard/main/Followers.jsx"
import VerifyUser from './components/VerifyUser.jsx'
import {Routes,Route,Navigate} from "react-router-dom";
import axios from "axios";
import {useRecoilValue} from "recoil"
import userAtom from './atoms/userAtom.js'
import {Toaster} from 'react-hot-toast';
import ResetPassword from './components/ResetPassword.jsx';


axios.defaults.baseURL= "http://localhost:8080";
axios.defaults.withCredentials = true;

function App(){
  const user = useRecoilValue(userAtom);

  console.log(user);
    return(
        <>
            <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />
            <Header />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
              <Route path='/reset-password/:token' element={<ResetPassword/>}/>
              <Route path='/verify-email' element={user ? <VerifyUser/>: <Navigate to='/auth'/>}/>
              <Route path='/:username' element={<UserPage />} />
              <Route element={ user?.isVerified === true ? <DashboardLayout /> : <Navigate to='/verify-email' />}>
                <Route path="overview" index element={<Dashboard />} />
                <Route path="publish" element={<PublishCard />} />
                <Route path="followers" element={<Followers />} />
              </Route>
              <Route path="/auth" element={user ? <Navigate to="/overview" /> : <AuthPage />} />
            </Routes>
          </>
    )
}

export default App;