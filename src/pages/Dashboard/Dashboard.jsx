import ProfileImage from "../../assets/default-profile.png"
import { useEffect, useState } from 'react';
import {useRecoilState} from 'recoil';
import userAtom from "../../atoms/userAtom.js"
import { IoIosSend, IoIosWallet } from 'react-icons/io';
import { GiHeartInside } from 'react-icons/gi';
import {  IoShareSocialSharp } from 'react-icons/io5';
import { AreaChart, Card } from "@tremor/react";
import { RiGiftFill, RiMessengerFill } from 'react-icons/ri';
import { SlOptionsVertical } from 'react-icons/sl';
import { TiTimes } from 'react-icons/ti';
import axios from 'axios';
import toast from 'react-hot-toast';


const Dashboard = () => {
  const [userId, setUserId] = useRecoilState(userAtom)
  const [user, setUser] = useState({})
  const [supporters, setSupporters] =useState([{
    name:"Abraham Lincoln",
    amount:"10",
    "date":"August 24 20124"
  },
    {
      name:"Abraham Lincoln",
      amount:"10",
      "date":"August 24 20124"
    },
    {
      name:"Abraham Lincoln",
      amount:"10",
      "date":"August 24 20124"
    },
    {
      name:"Abraham Lincoln",
      amount:"10",
      "date":"August 24 20124"
    },
    {
      name:"Abraham Lincoln",
      amount:"10",
      "date":"August 24 20124"
    },
    {
      name:"Abraham Lincoln",
      amount:"20",
      "date":"August 24 20124"
    }
  ])
  const [showOption,setShowOption] = useState(null)


  const chartdata = [
    {
      date: 'Jan 22',
      SolarPanels: 2890,
      'Inverters': 2338,
    },
    {
      date: 'Feb 22',
      SolarPanels: 2756,
      'Inverters': 2103,
    },
    {
      date: 'Mar 22',
      SolarPanels: 3322,
      'Inverters': 2194,
    },
    {
      date: 'Apr 22',
      SolarPanels: 3470,
      'Inverters': 2108,
    },
    {
      date: 'May 22',
      SolarPanels: 3475,
      'Inverters': 1812,
    },
    {
      date: 'Jun 22',
      SolarPanels: 3129,
      'Inverters': 1726,
    },
    {
      date: 'Jul 22',
      SolarPanels: 3490,
      'Inverters': 1982,
    },
    {
      date: 'Aug 22',
      SolarPanels: 2903,
      'Inverters': 2012,
    },
    {
      date: 'Sep 22',
      SolarPanels: 2643,
      'Inverters': 2342,
    },
    {
      date: 'Oct 22',
      SolarPanels: 2837,
      'Inverters': 2473,
    },
    {
      date: 'Nov 22',
      SolarPanels: 2954,
      'Inverters': 3848,
    },
    {
      date: 'Dec 22',
      SolarPanels: 3239,
      'Inverters': 3736,
    },
  ];

  const valueFormatter = function (number) {
    return '$ ' + new Intl.NumberFormat('us').format(number).toString();
  };

  const AreaChartUsageExample=()=> {
    return (
      <>
        <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Revenue</h3>
        <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold ">$34,567</p>
        <AreaChart
          className="mt-4 h-72 border-2 border-fuchsia-300 rounded-2xl"
          data={chartdata}
          index="date"
          yAxisWidth={65}
          categories={['SolarPanels', 'Inverters']}
          colors={['indigo', 'cyan']}
          valueFormatter={valueFormatter}
        />
      </>
    );
  }

  useEffect(()=>{
    console.log(userId)
    const getUser = async()=>{
      try{
        const res = await axios.get(`/api/${userId._id}`)
        if(res.error){
          return toast.error("error loading card")
        }
        console.log(res)
        setUser(res.data)

      }catch(error){
        console.log(error.response?.data.message+":"+"error to load dashboard")
        toast.error(error.response?.data.message+":"+"error to load dashboard")
        setUser(null)
      }
    }
    getUser();
  },[user,userId._id])


  return (
    <>
        <div className='flex w-full items-center font-normal  flex-col rounded-md' >
            <div className="dark:text-white">
              {user?.username?<div>
                  Overview
                  <div className="text-2xl items-center flex pb-5 dark:text-white">Welcome to your dashboard, {user?.username}👋
                  </div>
                </div>
                :
                <div className="animate-pulse flex-col mb-6  mt-2 gap-4">
                  <div className="bg-slate-600 w-16 rounded-md h-4"></div>
                  <div className="bg-slate-600 w-96 h-5 rounded-md my-2"></div>
                </div>
              }

              <div className="flex lg:justify-evenly lg:items-center flex-col gap-8 lg:flex-row  min-h-50">
                {!user?.username? <div className=" min-h-28  shadow-lg bg-gradient-to-r from-fuchsia-300 to-amber-100 ... flex justify-center items-center p-3 gap-2  rounded-3xl">
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-600 h-20 w-20"></div>
                    <div className="flex-1 space-y-6 py-1 w-[300px]">
                      <div className="h-4 bg-slate-600 rounded"></div>
                      <div className="space-y-3 w-full">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-600 rounded col-span-2"></div>
                          <div className="h-2 bg-slate-600 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-600 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-col ">
                      <div className="bg-slate-600 h-4 w-4 rounded-lg mt-5"></div>
                    </div>
                  </div>
                </div>:<div
                  className="border min-h-28  shadow-lg bg-gradient-to-r from-fuchsia-300 to-amber-100 ... flex justify-center items-center p-3 gap-2  rounded-3xl">
                  <div className=""><img className="rounded-full min-h-20 min-w-20 border border-amber-400" width={100}
                                         height={100}
                                         src={ProfileImage} /></div>
                  <div className="flex flex-col text-black rounded-md"><p>{user?.email}</p>
                    <p className="text-gray-500 flex">boostmysteeze.com/{user?.username}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 ml-10">Share <IoShareSocialSharp size={24}
                                                                                                          className="cursor-pointer" />
                  </div>
                </div>
                }
                <div
                  className="bg-white border-2 shadow-lg border-amber-500 lg:ml-6 p-4 rounded-3xl">
                  {user?.username?
                  <p className="text-black flex justify-between  items-center ">Total Earnings<IoIosWallet size={24}
                className="text-amber-400" />
            </p>
                    :
                    <div className="animate-pulse mb-2 flex">
                      <div className="bg-slate-600 rounded-md w-full h-4 "></div>
                    </div>
                }
                  {user?.username?
          <p className="font-bold  flex   text-black text-4xl">$34,567<span
            className="pl-3 align-center flex justinpm run devfy-center items-center text-[8px] text-Quicksand font-bold text-cyan-900 italic"><span
            className="text-sm">⚡</span></span>
          </p>
                    :
                    <div className="space-y-1 flex-col">
                      <div className="animate-pulse bg-slate-600 w-44 p-5 rounded-lg">
                      </div>
                    </div>
                  }
        </div>
                {user?.username ?
                  <div
                    className="bg-white border-2 shadow-md  border-fuchsia-400 lg:ml-6 gap-2 p-4 rounded-3xl">
                    <p className="text-black flex justify-between items-center  gap-2">Supporters<GiHeartInside
                      size={24} className="text-fuchsia-400" /></p>
                    <p
                      className="font-bold   flex items-center text-black justify-center text-4xl">{user?.supporters?.length}</p>
                  </div>
                  :
                  <div
                    className="bg-white border-2 animate-pulse shadow-md  border-fuchsia-400 lg:ml-6 gap-2 p-4 rounded-3xl">
                    <div className="text-black flex justify-between items-center  bg-gray-600 h-4 rounded-md w-36 mb-2"></div>
                    <div
                      className="font-bold rounded-lg  w-full h-11 items-center text-black bg-slate-600 justify-center text-4xl"></div>
                  </div>

                }

              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="flex flex-col mt-5 dark:text-white ">
                  {user?.username?<div>
                  Earning Analytics
                  {AreaChartUsageExample()}
                  </div>
                    :
                    <div className="animate-pulse flex-col mt-2">
                      <div className="bg-slate-600 h-3 w-20 mb-3 rounded-md">
                      </div>
                      <div className="bg-slate-600 h-3 w-16 mb-3 rounded-md">
                      </div>
                      <div className="bg-slate-600 h-7 w-24 mb-5 rounded-md">
                      </div>
                      <div className="flex-col p-5 border-2 bg-slate-600 rounded-xl">
                        <div className="w-96 bg-slate-500 h-3 rounded-md mb-4">
                        </div>
                        <div className="w-80  bg-slate-500 h-3 rounded-md mb-4">
                        </div>
                        <div className="w-72 bg-slate-500 h-3 rounded-md mb-4">
                        </div>
                        <div className="w-64  bg-slate-500 h-3  rounded-md mb-4">
                        </div>
                        <div className="w-60 bg-slate-500 h-3 rounded-md mb-4">
                        </div>
                        <div className="w-96 bg-slate-500 h-3 rounded-md mb-4">
                        </div>
                        <div className="w-80  bg-slate-500 h-3 rounded-md mb-4">
                        </div>
                        <div className="w-72 bg-slate-500 h-3 rounded-md mb-4">
                        </div>
                        <div className="w-64  bg-slate-500 h-3  rounded-md mb-4">
                        </div>
                        <div className="w-60 bg-slate-500 h-3 rounded-md mb-4">
                        </div>
                      </div>
                    </div>
                  }
                </div>
                <div className="flex flex-col mt-10 dark:text-white lg:ml-12 gap-3 ">
                  {user?.username? <div>
                    <div className="flex gap-2 items-center">
                      <div className=" rounded-md bg-amber-300 w-4 h-4"></div>
                      Activities
                      <div className="bg-fuchsia-400 w-4 h-4 rounded-md"></div>
                      Support History
                    </div>
                    <div className="">
                      <div
                        className="flex p-2 shadow-md bg-gradient-to-r from-amber-300 to-amber-100 ... border text-tremor-default text-tremor-content dark:text-dark-tremor-content rounded-2xl justify-between items-center">No
                        of cards<span
                          className="text-dark-tremor-content-inverted font-bold ml-5 text-xl">5</span></div>
                    </div>
                  </div>
                  :
                    <div>
                      <div className="flex gap-2 items-center animate-pulse mb-3 mt-2">
                        <div className=" rounded-md bg-slate-600 w-4 h-4"></div>
                        <div className="rounded-md w-20 bg-slate-600 h-4"></div>
                        <div className="bg-slate-600 w-4 h-4 rounded-md"></div>
                        <div className="rounded-md w-20 bg-slate-600 h-4"></div>
                      </div>
                      <div className="">
                        {user?.username ?
                          <div
                            className="flex p-2 shadow-md bg-gradient-to-r from-amber-300 to-amber-100 ... border text-tremor-default text-tremor-content dark:text-dark-tremor-content rounded-2xl justify-between items-center">No
                            of cards<span
                              className="text-dark-tremor-content-inverted font-bold ml-5 text-xl">5</span></div>
                          :
                          <div
                            className="flex animate-pulse bg-slate-600 gap-4 justify-between p-3 rounded-xl">
                            <div className="w-16 bg-slate-500 rounded-md"></div>
                            <div className="ml-l h-4 w-5 bg-slate-500 rounded-md"></div>
                          </div>
                        }
                      </div>
                    </div>
                  }

                  {user?.username ? <div
                      className="rounded-2xl shadow-md bg-gradient-to-r from-fuchsia-300 to-amber-100 ... border p-2">
                      {supporters.map((supporter, index) => (
                        <div onMouseEnter={() => {
                          setShowOption(index);
                        }}
                             className="flex  justify-between items-center  cursor-pointer text-tremor-default text-tremor-content dark:text-dark-tremor-content"
                             key={index}>
                          <div
                            className="flex items-center justify-center my-2 bg-fuchsia-200 rounded-2xl px-2 gap-3"><span
                            className="w-5 h-5 rounded-3xl flex items-center justify-center active:bg-fuchsia-200 active:shadow-2xl hover:bg-fuchsia-300 relative cursor-pointer"
                            onMouseEnter={() => {
                              setShowOption(index)
                            }} onMouseLeave={() => {
                            setTimeout(setShowOption(''), 1)
                          }}><SlOptionsVertical />
                            {showOption === index ?
                              <div
                                className="absolute h-44 w-40 -top-40 lg:right-4 left-6 z-20 bg-opacity-90 p-2 rounded-2xl bg-fuchsia-200">
                                <div className="flex flex-row-reverse"><span
                                  className="m-0 text-white font-bold text-sm  flex bg-fuchsia-400 h-5 w-5 rounded-2xl items-center hover:bg-fuchsia-300 active:bg-fuchsia-200 active:shadow-2xl justify-center"
                                  onClick={() => {
                                    setShowOption("")
                                  }}>✖</span>
                                </div>
                                <div
                                  className="flex flex-col">

                                  <div
                                    className="flex gap-2 mt-2 justify-between p-2 bg-white cursor-pointer hover:bg-amber-100 transition-all active:drop-shadow-xl rounded-2xl items-center">
                                    <p className="text-dark-tremor-background font-bold">send message</p><IoIosSend />
                                  </div>
                                  <div
                                    className="flex gap-2 mt-2 justify-between p-2 bg-white cursor-pointer hover:bg-amber-100 transition-all active:drop-shadow-xl rounded-2xl items-center">
                                    <p className="text-dark-tremor-background font-bold">Offer Gift</p><RiGiftFill />
                                  </div>
                                  <div
                                    className="flex gap-2 mt-2 justify-between p-2 bg-white cursor-pointer hover:bg-amber-100 transition-all active:drop-shadow-xl rounded-2xl items-center">
                                    <p className="text-dark-tremor-background font-bold">invite</p><RiMessengerFill />
                                  </div>

                                </div>
                              </div> : ''}
                        </span><span><img className="object-cover rounded-full p-2" width={40} height={40}
                                          src='data:image/jpeg;base64,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' /></span>{supporter.name}
                          </div>
                          <span
                            className="text-dark-tremor-content-inverted font-bold text-xl">${supporter?.amount}</span>
                        </div>
                      ))}

                    </div>
                    :
                    <div
                      className="rounded-2xl shadow-md bg-gradient-to-r from-fuchsia-300 to-amber-100 ... border p-3">
                      <div className="flex-col animate-pulse">
                        <div className="flex justify-between gap-4 mb-5">
                          <div className="w-full h-6 bg-slate-600 rounded-md">
                          </div>
                          <div className="w-5 h-6 bg-slate-600 rounded-md">
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 gap-4">
                          <div className="w-full h-6 bg-slate-600 rounded-md">
                          </div>
                          <div className="w-5 h-6 bg-slate-600 rounded-md">
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 gap-4">
                          <div className="w-full h-6 bg-slate-600 rounded-md">
                          </div>
                          <div className="w-5 h-6 bg-slate-600 rounded-md">
                          </div>
                        </div>
                        <div className="flex justify-between gap-4 mb-5">
                          <div className="w-full h-6 bg-slate-600 rounded-md">
                          </div>
                          <div className="w-5 h-6 bg-slate-600 rounded-md">
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 gap-4">
                          <div className="w-full h-6 bg-slate-600 rounded-md">
                          </div>
                          <div className="w-5 h-6 bg-slate-600 rounded-md">
                          </div>
                        </div>
                        <div className="flex justify-between gap-4">
                          <div className="w-full h-6 bg-slate-600 rounded-md">
                          </div>
                          <div className="w-5 h-6 bg-slate-600 rounded-md">
                          </div>
                        </div>

                      </div>

                    </div>
                  }

                </div>
              </div>
            </div>
        </div>


    </>
  );
};
export default Dashboard;