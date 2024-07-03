import React from 'react';
import {Link} from "react-router-dom";
import {useState} from "react";
import {AiFillCrown} from "react-icons/ai";
import axios from "axios"
import {useSetRecoilState} from 'recoil';
import authScreenAtom from '../atoms/authAtom.js';
import userAtom from '../atoms/userAtom.js'
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';

const Signup = () => {
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  const setUserState = useSetRecoilState(userAtom);

  const navigate = useNavigate();
const [data,setData] = useState({
    username:"",
    email:"",
    password:"",
});


    const signupUser = async (e)=>{
      e.preventDefault();
      const {username, email, password} = data;
      try{
        const {data} = await axios.post('/api/signup',{
          username,email,password
        })
        if(data.error){
          console.log(data.error)
          toast.error(data.error)
          return;
        }
          setData({});
        toast.success(data.message)
          console.log(data)
          localStorage.setItem("bms-user",JSON.stringify(data));
          navigate('/dashboard');

      }catch(error){
        console.log(error)
      }
    }
    return (
        <div className="flex flex-col px-2 py-4 items-center mt-10">
            <div className="font-bold text-white text-2xl mb-2">Sign Up <p className="font-medium">Create your steeze link</p></div>
            <div className="flex items-center mt-2 mb-3  w-25 bg-zinc-300 p-2 rounded-md "> <span className="crown">{<AiFillCrown/>}</span>boostmysteez.io/<span className="page-link" placeholder="Nickname" readOnly>{data.username}</span></div>
            <div className="bg-gradient-to-r from-purple-200 to-amber-200 ... bg-opacity-60 backdrop-filter backdrop-blur-lg  px-5 py-3 rounded-md">
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
                <button
                  className="text-white bg-gradient-to-r from-zinc-800 ... hover:scale-90 transition-all hover:bg-zinc-800 px-4 py-2 mt-4 rounded-md transition-all w-full"
                  type="submit">Continue 🪄
                </button>
              </form>
            </div>
        </div>
    );
};

export default Signup;