import {useState} from "react";
import {NavLink} from 'react-router-dom';
import axios  from "axios";
import {useSetRecoilState} from 'recoil'
import userAtom from '../atoms/userAtom.js'
import authScreenAtom from '../atoms/authAtom.js'
import {toast} from 'react-hot-toast';

const Login = () => {
    const setUser = useSetRecoilState(userAtom)
    const [loading,setLoading] = useState(false);
    const setAuthScreen = useSetRecoilState(authScreenAtom);
const [data,setData] = useState({
    email:"",
    password:""
})

    const loginUser = async(e)=>{
        e.preventDefault();
        const {email,password} = data;
        try {
            setLoading(true)
            const {data} = await axios.post('/api/login', {
                email,
                password
            });
            if(data.error){
                console.log("error")
                toast.error(data.error)
            }
            localStorage.setItem("bms-user", JSON.stringify(data));
            setUser(data);
            toast.success(data.message)
            console.log(data)
        }catch(error){
            console.log(error)
        }finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex flex-col px-2 py-4 items-center mt-24">
            <h1 className="font-bold text-2xl text-black dark:text-white mb-2">Login</h1>
            <div className=" bg-opacity-60 backdrop-filter backdrop-blur-lg border bg-gradient-to-r from-purple-200 to-amber-200 ... border-amber-400 px-5 py-3 rounded-md">
                <form className=" flex flex-col " onSubmit={loginUser}>
                    <label className="mt-2" htmlFor="email">Email</label>
                    <input
                        className="text-sm p-2 focus:outline-none focus:border-amber-400 rounded-md"
                        type="email"
                        id="email"
                        placeholder="email"
                        required
                        value={data.email}
                        onChange={(e)=>setData({...data, email:e.target.value})}
                    />
                    <label className="mt-2" htmlFor="password">Password</label>
                    <input
                        className="text-sm p-2  focus:outline-none focus:border-amber-400 rounded-md"
                        type="password"
                        id="password"
                        placeholder="password"
                        required
                        value={data.password}
                        onChange={(e)=>setData({...data, password:e.target.value})}
                    />
                    <button className="text-white border-none px-4 py-2 mt-4 italic bg-gradient-to-r from-zinc-800 ... rounded-md hover:scale-90 transition-all hover:bg-zinc-800" type="submit">{loading?"Loading..":"Steeze Up ⚡"}
                    </button>
                </form>

                <NavLink to='/forgot-password' className="flex justify-center items center mt-2 underline">Forgot your password?</NavLink>
            </div>
            <div className="mt-2 justify-center dark:text-white">Not Registered? <span className="font-bold cursor-pointer" onClick={()=>{setAuthScreen("Signup")}}>Join Now</span></div>
        </div>
    );
};

export default Login;