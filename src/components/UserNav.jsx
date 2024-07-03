import React from 'react';
import {NavLink} from 'react-router-dom';


const UserNav = () => {
    return (
        <div className="">
            <div
                className='bg-white flex-col justify-center items-start lg:flex hidden transition-all border-2 border-white-500  w-50 rounded-md text-black p-5 gap-1'>

                <p className="pl-2 text-gray-500">Main</p>
                <NavLink to='/dashboard'
                         style={({ Active }) => {
                             return Active ? { color: "plum", font:"bold"} : {};
                         }}
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 p-2 active:bg-zinc-800 rounded-md transition-all">
                    Overview
                </NavLink>
                <NavLink
                    to='Publish'
                    style={({ isActive }) => {
                        return isActive ? { color: "plum", font:"bold"} : {};
                    }}
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 p-2 active:bg-zinc-800 rounded-md transition-all">Publish
                    content
                </NavLink>
                <NavLink
                    to='Followers'
                    style={({ isActive }) => {
                        return isActive ? { color: "plum", font:"bold"} : {};
                    }}
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 p-2 active:bg-zinc-800 rounded-md transition-all">Followers
                </NavLink>
                <NavLink
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 active:bg-zinc-800 p-2 rounded-md transition-all">messages
                </NavLink>
                <NavLink
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 p-2 active:bg-zinc-800 rounded-md transition-all">Explore
                    Steezers
                </NavLink>

                {/*second section*/}

                <p className="pl-2 mt-4 text-gray-500">Earn More</p>
                <NavLink
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white p-2  hover:scale-90 active:bg-zinc-800 rounded-md transition-all">Create
                    Membership
                </NavLink>
                <NavLink
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white p-2  hover:scale-90 active:bg-zinc-800  rounded-md transition-all">Sell
                    Something
                </NavLink>

                {/*third section*/}
                <p className="pl-2 mt-4 text-gray-500">Settings</p>
                <NavLink
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white p-2  hover:scale-90 active:bg-zinc-800 rounded-md transition-all">Integration
                </NavLink>
                <button
                    className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white p-2  hover:scale-90 active:bg-zinc-800  rounded-md transition-all">Cashout Settings
                </button>

            </div>

            <div className="md:flex lg:hidden text-white">
            </div>

        </div>
    );
}

export default UserNav;