import React from 'react';
import fundCard from "../components/FundCard.jsx";
import UserNav from "../components/UserNav.jsx"

const Dashboard = () => {
    return (
        <>
            <div className='p-10'>
                <UserNav/>
                <div className='flex justify-center font-medium  rounded-md'>
                    <div className="flex  lg:justify-evenly flex-col gap-10 lg:flex-row ">
                        <div className="border border-shadow bg-zinc-100 flex p-2 gap-2 md:p-5 rounded-md">
                        <div>ProfilePicture</div>
                       <div className="flex flex-col rounded-md"><p>Hi User!</p>
                        <p className="text-gray-500">bosstmysteeze.com/user</p>
                       </div>
                            <div className="flex items-center ml-10">Share 🔗 </div>
                    </div>
                        <div className="gap-4 border border-shadow  w-24*2 p-2 gap-2 md:p-5 rounded-md bg-zinc-100">
                            <p>Total Earnings</p>
                        <p className="font-bold text-5xl">$0</p>
                        </div>
                    </div>

                    <div >
                    </div>
                </div>
            </div>

        </>

    );
};

export default Dashboard;