import { useNavigate, useParams } from 'react-router-dom';
import {useState} from 'react'
import axios  from 'axios';
import {toast} from 'react-hot-toast'

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =   useState('');
  const [loading, setLoading] =  useState(false)

const {token} = useParams();
  const navigate = useNavigate();
  const handleSubmit =async(e)=>{
e.preventDefault()
    if(password !== confirmPassword){
      alert("passwords do not match");
      return
    }
try{
      setLoading(true)
  const response = await axios.post(`api/reset-password/${token}`,{
    password
  })
  toast.success(response.data.message)
  navigate('/auth');
}catch (error) {
console.log(error)
}finally {
  setLoading(false)
}
  }
  return (
    <div className="flex flex-col px-2 py-4 items-center mt-24">
      <h1 className="font-bold text-2xl text-black dark:text-white mb-2">Reset Password</h1>
      <div
        className=" bg-opacity-60 backdrop-filter backdrop-blur-lg border  bg-gradient-to-r from-fuchsia-400 to-fuchsia-100 ... border-amber-400 px-5 py-3 rounded-md">
        <form className=" flex flex-col " onSubmit={handleSubmit}>
          <label className="mt-2" htmlFor="email">Password</label>
          <input
            className="text-sm p-2 focus:outline-none focus:border-amber-400 rounded-md"
            type="password"
            id="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value )}
          />
          <label className="mt-2" htmlFor="password">Confirm Password</label>
          <input
            className="text-sm p-2  focus:outline-none focus:border-amber-400 rounded-md"
            type="password"
            id="confirmpassword"
            placeholder="Confirm password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="text-white border-none px-4 py-2 mt-4  bg-gradient-to-r from-zinc-800 ... rounded-md hover:scale-90 transition-all hover:bg-zinc-800"
            type="submit">{loading ? "Loading.." : "Set New Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;