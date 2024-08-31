import React from 'react';
import {useSetRecoilState} from "recoil"
import userAtom from '../atoms/authAtom.js'
import axios from 'axios';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

const LogoutButton = () => {
 const setUser = useSetRecoilState(userAtom);
 const navigate = useNavigate();
  const handleLogout =async(e)=>{
    e.preventDefault();
    try{
      localStorage.removeItem("bms-user");
      const {data} = await axios.post('/api/logout');
      console.log(data)
      if(data.error){toast.warning(data.error)}
      setUser("");
      toast.success(data.message)
      window.location.reload();
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <button
        className="bg-gradient-to-r from-zinc-800 ... rounded-md hover:scale-95 hover:bg-zinc-800 transition-all text-white py-1 px-4 mx-1" onClick={handleLogout}>
        Logout</button>
    </div>
  );
};

export default LogoutButton;