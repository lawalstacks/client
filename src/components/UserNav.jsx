import {NavLink} from 'react-router-dom';
import { FaMicrosoft } from "react-icons/fa";
import { GiCardJoker, GiHamburger, GiHamburgerMenu, GiTakeMyMoney } from 'react-icons/gi';
import { RiUserFollowFill } from "react-icons/ri";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { SiLinkfire } from "react-icons/si";
import { FaShopLock } from "react-icons/fa6";
import { PiShoppingBagFill, PiPlugsConnectedFill} from 'react-icons/pi';

const UserNav = () => {
    return (
        <div className="">
            <div
                className='bg-white fixed flex-col justify-center items-start lg:flex hidden transition-all border-2 border-white-500  w-50 rounded-3xl text-black p-5 gap-1'>

                <p className="pl-2 text-gray-500">Main</p>
                <NavLink to='/overview'
                         style={({ isActive }) => {
                           return isActive ? { color: "plum", font:"bold"} : {};
                         }}
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 p-2 active:bg-zinc-800 rounded-md transition-all">
                    <span className="flex justify-center items-center gap-2"><FaMicrosoft size={24}/> Overview</span>
                </NavLink>
              <NavLink
                to="publish"
                style={({ isActive }) => {
                  return isActive ? { color: 'plum', font: 'bold' } : {};
                }}
                className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 p-2 active:bg-zinc-800 rounded-md transition-all"><span
                className="flex justify-center items-center gap-2"><GiCardJoker size={24} />Steeze Card</span>
              </NavLink>
              <NavLink
                to="followers"
                style={({ isActive }) => {
                        return isActive ? { color: "plum", font:"bold"} : {};
                    }}
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 p-2 active:bg-zinc-800 rounded-md transition-all"><span className="flex gap-2 justify-between items-center"><RiUserFollowFill size={24}/>Followers</span>
                </NavLink>
                <NavLink
                  to="messages"
                  style={({ isActive }) => {
                    return isActive ? { color: "plum", font:"bold"} : {};
                  }}
                  className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 active:bg-zinc-800 p-2 rounded-md transition-all"><span className="flex gap-2 justify-between items-center"><BiSolidMessageSquareDots size={24}/>messages</span>
                </NavLink>
              <NavLink
                to="explore-steezers"
                  style={({ isActive }) => {
                    return isActive ? { color: "plum", font:"bold"} : {};
                  }}
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 p-2 active:bg-zinc-800 rounded-md transition-all"><span className="flex gap-2 justify-between items-center"><SiLinkfire size={24}/>Explore Steezers</span>
              </NavLink>

              {/*second section*/}

              <p className="pl-2 mt-4 text-gray-500">Earn More</p>
                <NavLink
                  to="membership"
                  style={({ isActive }) => {
                    return isActive ? { color: "plum", font:"bold"} : {};
                  }}
                  className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white p-2  hover:scale-90 active:bg-zinc-800 rounded-md transition-all"><span className="flex justify-center items-center gap-2"><FaShopLock size={24}/> Create Membership</span>

                </NavLink>
                <NavLink
                  to="Sell"
                  style={({ isActive }) => {
                    return isActive ? { color: "plum", font:"bold"} : {};
                  }}
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white p-2  hover:scale-90 active:bg-zinc-800  rounded-md transition-all"><span className="flex justify-center items-center gap-2"><PiShoppingBagFill
                size={24}/>Sell Something</span>

                </NavLink>

                {/*third section*/}
                <p className="pl-2 mt-4 text-gray-500">Settings</p>
                <NavLink
                  to="integeration"
                  style={({ isActive }) => {
                    return isActive ? { color: "plum", font:"bold"} : {};
                  }}
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white p-2  hover:scale-90 active:bg-zinc-800 rounded-md transition-all"><span className="flex justify-center items-center gap-2"><PiPlugsConnectedFill size={24}/>Integration</span>
                </NavLink>
                <button
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white p-2  border-4 hover:scale-90 active:bg-zinc-800  border-orange-200 rounded-3xl transition-all bg-amber-500"><span className="flex justify-center items-center gap-2"><GiTakeMyMoney size={24}/>Cashout Settings</span>
                </button>


            </div>




        </div>
    );
}

export default UserNav;