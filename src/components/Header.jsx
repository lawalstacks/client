import {Link} from "react-router-dom";
import Logo from '../assets/Logo.png'
import { AiFillProfile, AiOutlineNotification, AiOutlineUser } from 'react-icons/ai';
import LogoutButton from './LogoutButton.jsx'
import {useRecoilValue} from 'recoil';
import userAtom from '../atoms/userAtom.js'
import { IoMoon, IoSunny } from 'react-icons/io5';
import { useState } from 'react';

const Header = () => {
const user = useRecoilValue(userAtom);
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }
    return (
        <div className="flex justify-between fixed right-0 left-0 top-0 shadow-md items-center  bg-gradient-to-r from-fuchsia-400 to-fuchsia-200 ...  z-20 h-16 px-2">
            <div className="">
                <Link to='/'><img width={45} src={Logo} alt="Logo"/></Link>
            </div>
          <div className="flex justify-evenly items-center gap-4">
            {user ?
              <div className="rounded-full border-2 border-zinc-600 cursor-pointer bg-amber-400 hover:bg-amber-300 p-1">
                <AiOutlineUser size={24} /></div>:""}
            |
            {user ? <div
              className="rounded-full border-2 p-1 border-zinc-600  relative cursor-pointer bg-amber-400 hover:bg-amber-300">
              <AiOutlineNotification size={24} />
              <div
                className="absolute  h-6 w-6 text-sm font-bold flex justify-center items-center text-white -top-2.5 -right-2 rounded-full bg-red-600">3
              </div>
            </div>:""}
            <div className="rounded-full border-2 p-1 cursor-pointer  border-zinc-600 bg-amber-400 hover:bg-amber-300"
                 onClick={() => darkModeHandler()}>{dark && <IoSunny size={24} />}{!dark &&
              <IoMoon size={24} />}
            </div>
            {user ? <LogoutButton /> : ''}
          </div>
        </div>
    );
};

export default Header;