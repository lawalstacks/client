import React from 'react';
import {Outlet} from 'react-router-dom';
import UserNav from '../components/UserNav';

const DashboardLayout = () => {
    return (
        <>
            <div className='mt-10 flex px-10'>
               <UserNav/>
                <main className="lg:ml-10">
                    <Outlet/>
                </main>
            </div>
        </>
    );
};

export default DashboardLayout;