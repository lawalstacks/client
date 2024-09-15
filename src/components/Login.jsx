import {useState} from "react";
import {NavLink} from 'react-router-dom';
import axios  from "axios";
import {useSetRecoilState} from 'recoil'
import userAtom from '../atoms/userAtom.js'
import authScreenAtom from '../atoms/authAtom.js'
import {toast} from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import {useGoogleLogin} from '@react-oauth/google'
import Loader from '../assets/Pulse@1x-1.0s-200px-200px.svg'

const Login = () => {
    const setUser = useSetRecoilState(userAtom)
    const [loading,setLoading] = useState(false);
    const setAuthScreen = useSetRecoilState(authScreenAtom);
    const [data,setData] = useState({
    email:"",
    password:""
})

    const handleGoogleLoginSuccess = async (tokenResponse)=>{
    const accessToken = tokenResponse.access_token;
     await signInGoogle(accessToken)
    }
    const signInGoogle= async (accessToken)=>{
        try {
            const {data} = await axios.post('/api/login', {
                googleAccessToken: accessToken
            });
            if(data.error){
                console.log("error")
                toast.error(data.error)
            }
            localStorage.setItem("bms-user", JSON.stringify(data.user));
            setUser(data.user);
            toast.success(data.message)
            console.log(data)
        }catch(error){
            console.log(error)
        }
    };
    const loginGoogle = useGoogleLogin({onSuccess:handleGoogleLoginSuccess})

    const loginUser = async(e)=>{
        e.preventDefault();
        const {email,password} = data;
        try {
            setLoading(true)
            const {data} = await axios.post('/api/login', {
                email,
                password
            });
            if(data.error){
                console.log("error")
                toast.error(data.error)
            }
            localStorage.setItem("bms-user", JSON.stringify(data.user));
            setUser(data.user);
            toast.success(data.message)
            console.log(data.user)
        }catch(error){
            console.log(error)
        }finally {
            setLoading(false)
        }
    }
    return (
      <div className="flex flex-col px-2 py-4  items-center mt-24">
          <h1 className="font-bold text-2xl text-black dark:text-white mb-2">Login</h1>
          <div
            className=" bg-opacity-60 backdrop-filter backdrop-blur-lg border bg-gradient-to-r from-fuchsia-400 to-fuchsia-100 ... border-amber-300 px-5 py-3 rounded-lg">
              <form className=" flex flex-col " onSubmit={loginUser}>
                  <label className="mt-2" htmlFor="email">Email</label>
                  <input
                    className="text-sm p-2 focus:outline-none focus:border-amber-400 rounded-md"
                    type="email"
                    id="email"
                    placeholder="email"
                    required
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                  />
                  <label className="mt-2" htmlFor="password">Password</label>
                  <input
                    className="text-sm p-2  focus:outline-none focus:border-amber-400 rounded-md"
                    type="password"
                    id="password"
                    placeholder="password"
                    required
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                  />{loading ? <button
                  className="text-white font-bold flex items-center justify-center border-none px-4 py-1.5 mt-4 italic  rounded-md mx-3 bg-zinc-700 transition-all "
                  type="submit"><img src={Loader}/>
                </button> :

                <button
                  className="text-white font-bold flex items-center justify-center border-none px-4 py-2 mt-4 italic bg-gradient-to-r from-zinc-800 ... rounded-md active:scale-90 hover:scale-80 transition-all hover:bg-zinc-600"
                  type="submit">Steeze Up ⚡
                </button>}

              </form>

              <NavLink to="/forgot-password" className="flex justify-center items center mt-2 underline">Forgot your
                  password?</NavLink>
          </div>
          <div className="mt-2 justify-center dark:text-white">Not Registered? <span
            className="font-bold cursor-pointer" onClick={() => {
              setAuthScreen("Signup")
          }}>Join Now</span></div>
         <p className="my-2">OR</p>
          <button
            className="dark:text-white dark:border-white border-inherit flex justify-center items-center gap-2 border-2 dark:bg-inherit hover:scale-90 px-4 py-2  rounded-md transition-all"
            type="submit" onClick={()=>loginGoogle()}><FcGoogle size={24} />Login with Google
          </button>
      </div>
    );
};

export default Login;