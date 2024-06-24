import React from 'react';

const UserNav = () => {
    return (
        <div className="fixed">
            <div className='flex-col justify-center items-start lg:flex hidden transition-all shadow-md shadow-gray-400/30 w-50 bg-zinc-100 rounded-md text-black p-5 gap-1'>

                <p className="pl-2 text-gray-500">Main</p>
                <button className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 p-2 active:bg-zinc-800 rounded-md transition-all">steezers</button>
                <button className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 p-2 active:bg-zinc-800 rounded-md transition-all">Publish content</button>
                <button className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white hover:scale-90 active:bg-zinc-800 p-2 rounded-md transition-all">messages</button>

                {/*second section*/}

                <p className="pl-2 mt-4 text-gray-500">Earn More</p>
                <button className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white p-2  hover:scale-90 active:bg-zinc-800 rounded-md transition-all">Create Membership</button>
                <button className="hover:bg-gradient-to-r from-zinc-800 ... hover:text-white p-2  hover:scale-90 active:bg-zinc-800  rounded-md transition-all">Sell Something</button>

            </div>
            <div className="md:flex lg:hidden text-white">
                Hambugger
            </div>

        </div>
    );
};

export default UserNav;