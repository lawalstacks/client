import ProfileImage from "../../assets/default-profile.png"
import {useState} from "react";
import {useRecoilState} from 'recoil';
import userAtom from "../../atoms/userAtom.js"

const Dashboard = () => {
  const [user, setUser] = useRecoilState(userAtom)
  console.log(user.user.username);

    return (
        <div className='flex w-full items-center font-normal flex-col rounded-md'>
            <div className="dark:text-white">
                Overview
                <div className="text-2xl pb-5 dark:text-white">Welcome to your dashboard, {user.user.username}👋
                </div>
                <div className="flex lg:justify-evenly lg:items-center flex-col gap-10 lg:flex-row  min-h-50">
                    <div
                        className="border min-h-28  border-shadow bg-purple-300 flex justify-center items-center p-2 gap-2  bg-opacity-60 backdrop-filter backdrop-blur-xl rounded-3xl">
                        <div className=""><img className="rounded-full min-h-20 min-w-20 border border-amber-400" width={100} height={100}
                                  src={ProfileImage}/></div>
                        <div className="flex flex-col text-black rounded-md"><p>{user.user.email}</p>
                            <p className="text-gray-500 flex">boostmysteeze.com/{user.user.username}</p>
                        </div>
                        <div className="flex items-center ml-10">Share 🔗</div>
                    </div>
                    <div
                        className="bg-white border-4 border-amber-500 lg:ml-6 gap-2 p-4 rounded-3xl">
                        <p className="text-black">Total Earnings</p>
                        <p className="font-bold  flex items-center text-black text-5xl">${user.user.balance}<span
                            className="pl-3 align-center text-sm text-Quicksand font-bold text-cyan-900 italic">x5000 Steeze <span
                            className="text-2xl">⚡</span></span></p>
                    </div>
                </div>
                <div className="flex-evenly  mt-10 text-white">

                </div>
            </div>
        </div>

    );
};
export default Dashboard;