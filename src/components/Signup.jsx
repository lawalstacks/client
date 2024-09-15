import {useState} from "react";
import {AiFillCrown} from "react-icons/ai";
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import {useSetRecoilState} from 'recoil';
import authScreenAtom from '../atoms/authAtom.js';
import userAtom from '../atoms/userAtom.js'
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import {useGoogleLogin} from '@react-oauth/google'
import Loader from '../assets/Pulse@1x-1.0s-200px-200px.svg'

const Signup = () => {
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  const setUser = useSetRecoilState(userAtom);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
const [data,setData] = useState({
    username:"",
    email:"",
    password:"",
});

  const handleGoogleLoginSuccess = async (tokenResponse)=>{
    const accessToken = tokenResponse.access_token;
    await signInGoogle(accessToken)
  }
  const signInGoogle= async (accessToken)=>{
    try {
      const {data} = await axios.post('/api/Signup', {
        googleAccessToken: accessToken
      });
      if(data.error){
        console.log("error")
        toast.error(data.error)
      }
      localStorage.setItem("bms-user", JSON.stringify(data.user));
      setUser(data.user);
      navigate('/verify-email');
      toast.success(data.message)
      console.log(data.user)
    }catch(error){
      console.log(error)
    }
  };

  const signupGoogle = useGoogleLogin({onSuccess:handleGoogleLoginSuccess})
  const signupUser = async (e)=>{
      e.preventDefault();
      const {username, email, password} = data;
      try{
        setLoading(true);
        const {data} = await axios.post('/api/signup',{
          username,email,password
        })
        //setData({})
        if(data.error){
          console.log(data.error)
          toast.error(data.error);
        }
        localStorage.setItem("bms-user",JSON.stringify(data.user));

        setUser(data.user);
        toast.success(data.message)
        console.log(data.user)
      }catch(error){
        toast.error(data.error)
      }finally {
        setLoading(false)
      }
    }
    return (
      <div className="flex flex-col px-2 py-4 items-center mt-24">
        <div className="font-bold dark:text-white text-2xl mb-2">Sign Up <p className="font-medium">Create your steeze
          link</p></div>
        <div className="flex items-center mt-2 mb-3  w-25  p-2 rounded-md "><span className="crown">{
          <AiFillCrown />}</span>boostmysteez.io/<span className="page-link" placeholder="Nickname"
                                                       readOnly>{data.username}</span></div>
        <div
          className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-100 ... bg-opacity-60 backdrop-filter backdrop-blur-lg  px-5 py-3 rounded-lg">
          <form className=" flex flex-col " onSubmit={signupUser}>
            <label htmlFor="name">Nickname</label>
            <input
              className="text-sm p-2 focus:outline-none focus:border-amber-400 rounded-md"
              type="name"
              id="name"
              placeholder="Enter Your Nickname"
              value={data.username}
              required
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <label className="mt-2" htmlFor="email">Email</label>
            <input
              className="text-sm focus:outline-none focus:border-amber-400 p-2 rounded-md"
              type="email"
              id="email"
              placeholder="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <label className="mt-2" htmlFor="password">Password</label>
            <input
              className="text-sm focus:outline-none focus:border-amber-400 p-2 rounded-md"
              type="password"
              id="password"
              placeholder="password"
              required
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            {loading ? <button
                className="text-white font-bold flex items-center justify-center border-none px-4 py-1.5 mt-4 italic  rounded-md mx-3 bg-zinc-700 transition-all "
                type="submit"><img src={Loader}/>
              </button> :

              <button
                className="text-white font-bold flex items-center justify-center border-none px-4 py-2 mt-4 italic bg-gradient-to-r from-zinc-800 ... rounded-md active:scale-90 hover:scale-80 transition-all hover:bg-zinc-600"
                type="submit"> Continue 🪄
              </button>}
            <div className="mt-2 flex justify-center w-full text-black">Already Signed Up? <span
              className="font-bold ml-2 cursor-pointer" onClick={() => {
              setAuthScreen("Login")
            }}>Login</span></div>
          </form>
        </div>
        <p className="my-2">OR</p>
        <button
          className="dark:text-white dark:border-white border-inherit flex justify-center items-center gap-2 border-2 dark:bg-inherit hover:scale-90 px-4 py-2 rounded-md transition-all"
          type="submit" onClick={()=>signupGoogle()}><FcGoogle size={24}/>Sign Up with Google
        </button>
      </div>
    );
};

export default Signup;