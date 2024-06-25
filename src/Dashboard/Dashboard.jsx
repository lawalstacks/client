import React from 'react';
import ProfileImage from "../assets/default-profile.png"

const Dashboard = () => {
    return (
        <div className='flex  items-center font-normal flex-col rounded-md'>
            <div>
                <div className="font-bold flex text-2xl pb-5 text-white">Hi, Teekzel 👋
                </div>
                <div className="flex  lg:justify-evenly flex-col gap-10 lg:flex-row ">
                    <div
                        className="border border-shadow bg-gradient-to-r from-purple-200 to-amber-200 ... flex justify-center items-center p-2 gap-2 h-36 lg:h-full bg-opacity-60 backdrop-filter backdrop-blur-xl rounded-md">
                        <div><img className="rounded-full border border-amber-400" width={100}
                                  src={ProfileImage}/></div>
                        <div className="flex flex-col rounded-md"><p>lawal.webdesign@gmail.com</p>
                            <p className="text-gray-500">boostmysteeze.com/Teekzel</p>
                        </div>
                        <div className="flex items-center ml-10">Share 🔗</div>
                    </div>
                    <div
                        className="bg-gradient-to-r from-amber-200 to... gap-4 border border-shadow bg-opacity-60 backdrop-filter  lg:h-full backdrop-blur-xl w-24*2 p-2 gap-2 md:p-5 rounded-md bg-zinc-100">
                        <p>Total Earnings</p>
                        <p className="font-bold flex items-center text-5xl">$5000<span
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