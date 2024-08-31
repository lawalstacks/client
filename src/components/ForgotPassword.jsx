import {useState} from 'react'
import {NavLink} from 'react-router-dom';
import axios  from 'axios';
import {toast} from 'react-hot-toast'

const ForgotPassword = () => {
  const [data, setData] = useState({email:""})
  const [loading, setLoading] = useState(false)
  const [tokenSent, setTokenSent] = useState(false)
  const sendToken = async (e) =>{
    e.preventDefault();
    const {email} = data;
    try {
      setTokenSent(false)
      setLoading(true)
      const {data} =  await axios.post('api/forgot-password',{
        email
      })
      if(data){
        setTokenSent(true)
        toast.success("Sent!")
        console.log(data)
      }
    }catch (e) {
      console.log(e)
    }finally {
      setLoading(false)

    }
  }
  return (
    <div className="flex flex-col px-2 py-4 items-center mt-24 mx-auto max-w-96">
      <h1 className="font-bold text-2xl text-black dark:text-white mb-2">Forgot Password</h1>
      <div
        className=" bg-opacity-60 backdrop-filter backdrop-blur-lg border bg-gradient-to-r from-purple-200 to-amber-200 ... border-amber-400 px-5 py-3 rounded-md">
        <form className=" flex flex-col " onSubmit={sendToken}>
          {!tokenSent ?
            <label className="mt-2" htmlFor="email">Enter the email address associated with your account, and you will
              receive an email with further instructions to reset your password</label> :
            <label className="mt-2" htmlFor="email">Password reset link has been sent to your email</label>}
          {!tokenSent? <input
            className="text-sm p-2 my-2 focus:outline-none focus:border-amber-400 rounded-md"
            type="email"
            id="email"
            placeholder="email"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />:""}
          {!tokenSent ? <button
            className="text-white border-none px-4 py-2 mt-2 dark:text-white italic bg-gradient-to-r from-zinc-800 ... rounded-md hover:scale-90 transition-all hover:bg-zinc-800"
            type="submit">{loading ? "Loading.." : "Continue"}
          </button>:""}
        </form>
      </div>
      <NavLink to='/auth' className=" flex font-bold justify-center items-center mt-2">Back</NavLink>
    </div>
  );
};

export default ForgotPassword;