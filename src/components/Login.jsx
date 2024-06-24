import {Link} from "react-router-dom";
import {useState} from "react";
import axios  from "axios";

const Login = ({setIsloggedin}) => {
const [data,setData] = useState({
    email:"",
    password:""
})
    const loginUser =(e)=>{
        e.preventDefault();
        axios.post('');
    }
    return (
        <div className="flex flex-col px-2 py-4 items-center mt-10">
            <h1 className="font-bold text-2xl mb-2">Login</h1>
            <div className=" shadow-md shadow-gray-400/40 border bg-white border-amber-400 px-5 py-3 rounded-md">
                <form className=" flex flex-col " onSubmit={loginUser}>
                    <label className="mt-2" htmlFor="email">Email</label>
                    <input
                        className="text-sm p-2 rounded-md"
                        type="text"
                        id="email"
                        placeholder="email"
                        required
                        value={data.email}
                        onChange={(e)=>setData({...data, email:e.target.value})}
                    />
                    <label className="mt-2" htmlFor="password">Password</label>
                    <input
                        className="text-sm p-2 rounded-md"
                        type="password"
                        id="password"
                        placeholder="password"
                        required
                        value={data.password}
                        onChange={(e)=>setData({...data, password:e.target.value})}
                    />
                    <button className="text-white px-4 py-2 mt-4 italic bg-gradient-to-r from-zinc-800 ... rounded-md hover:scale-90 transition-all hover:bg-zinc-800" type="submit">Steeze Up ⚡
                    </button>
                </form>
            </div>
            <div className="mt-2 justify-center">Not Registered? <Link className="font-bold" to='/Signup'>Join Now</Link></div>
        </div>
    );
};

export default Login;