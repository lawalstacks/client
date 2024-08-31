
import {Outlet} from 'react-router-dom';
import UserNav from '../../components/UserNav';
import { CgMenuLeftAlt } from "react-icons/cg";


const DashboardLayout = () => {
    return (
      <>
        <div className="lg:hidden pt-16
         dark:text-white p-5 m-0">
          <CgMenuLeftAlt size={24} />
        </div>
        <div className='lg:mt-20 flex px-10 h-screen'>
          <UserNav />
          <main className="lg:ml-80 mx-auto">
            <Outlet />
          </main>
        </div>
      </>
    );
};

export default DashboardLayout;