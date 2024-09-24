
import { IoShareSocialSharp } from 'react-icons/io5';
import { IoIosWallet } from 'react-icons/io';
import { GiHeartInside } from 'react-icons/gi';
import { SlOptionsVertical } from 'react-icons/sl';

const OverviewSkeleton = () => {
  return (
    <div className='flex w-full animate-pulse items-center font-normal flex-col rounded-md'>
      <div className="dark:text-white">
        Overview
        <div className="text-2xl pb-5 dark:text-white">Welcome to your dashboard 👋
        </div>
        <div className="flex lg:justify-evenly lg:items-center flex-col gap-8 lg:flex-row  min-h-50">
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white border-2 shadow-lg border-amber-500 lg:ml-6 p-4 rounded-3xl">
            <p className="text-black flex justify-between  bg-slate-700 items-center ">Total Earnings<IoIosWallet size={24}
                                                                                                     className="text-amber-400" />
            </p>
            <p className="font-bold  flex  bg-slate-600 text-black text-4xl">$34,567<span
              className="pl-3 align-center flex justify-center items-center text-[8px] text-Quicksand font-bold text-cyan-900 italic"><span
              className="text-sm">⚡</span></span></p>
          </div>
          <div
            className="bg-white border-2 shadow-md  border-fuchsia-400 lg:ml-6 gap-2 p-4 rounded-3xl">
            <p className="text-black flex justify-between items-center  gap-2">Supporters<GiHeartInside size={24}
                                                                                                        className="text-fuchsia-400" />
            </p>
            <p
              className="font-bold h-4 w-56 flex items-center text-black justify-center text-4xl"></p>
          </div>

        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col mt-10 dark:text-white ">
            Earning Analytics

          </div>
          <div className="flex flex-col mt-10 dark:text-white lg:ml-12 gap-3 ">
            <div className="flex gap-2 items-center">
              <div className=" rounded-md bg-slate-600 w-4 h-4"></div>
              Activities
              <div className="bg-slate-600 w-4 h-4 rounded-md"></div>
              Support History
            </div>
            <div className="">
              <div
                className="flex p-2 shadow-md bg-gradient-to-r from-amber-300 to-amber-100 ... border text-tremor-default text-tremor-content dark:text-dark-tremor-content rounded-2xl justify-between items-center">No
                of cards<span
                  className="text-dark-tremor-content-inverted max-h-5 max-w-5 font-bold ml-5 text-xl"></span></div>
            </div>


            <div className="rounded-2xl shadow-md bg-gradient-to-r from-fuchsia-300 to-amber-100 ... border p-2">
                <div
                     className="flex  justify-between items-center  cursor-pointer text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                  <div className="flex items-center justify-center my-2 bg-fuchsia-200 rounded-2xl px-2 gap-3"><span
                    className="w-5 h-5 rounded-3xl flex items-center justify-center active:bg-fuchsia-200 active:shadow-2xl hover:bg-fuchsia-300 relative cursor-pointer"><SlOptionsVertical />
                  </span><span><img className="object-cover rounded-full p-2" width={40} height={40}/></span></div>
                  <span className="text-dark-tremor-content-inverted font-bold text-xl"></span>
                </div>
              ))

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSkeleton;