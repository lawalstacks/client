import {useRef,useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useSetRecoilState} from 'recoil';
import userAtom from '../atoms/userAtom.js';

const VerifyUser = () => {
  const setUser = useSetRecoilState(userAtom);
  const [code,setCode] = useState(["","","","","",""])
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value)=>{
    const newCode = [...code];
    //handle pasted content
    if(value.length > 1){
      const pastedCode = value.slice(0,6).split("");
      for(let i=0; i<6; i++){
        newCode[i]=pastedCode[i] || "";
      }
      setCode(newCode)
      //focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit)=> digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1: 5;
      inputRefs.current[focusIndex].focus();
    }else{
      newCode[index] = value;
      setCode(newCode);

      //move focus to the next input field if value is entered
      if(value && index < 5){
        inputRefs.current[index + 1].focus()
      }
    }
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const verificationCode = code.join("");
    console.log(verificationCode)
    try{
      setLoading(true)
      const response = await axios.post('/api/verify-email',{
        verificationCode
      })
      console.log(verificationCode)
      if(!response.data.success){
        toast.success(response.data.message);
      }
      if(response.data.success){
        localStorage.setItem("bms-user",JSON.stringify(response.data.user))
        setUser(response.data.user)
        navigate('/overview')
        toast.success(response.data.message)
      }
      console.log(response)
    }catch (e) {
      console.log(e)
    }finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (index,e)=>{
    if(e.key === "Backspace" && !code[index] && index > 0){
      inputRefs.current[index-1].focus();
    }
  }

  useEffect(() => {
    if(code.every(digit=> digit !== "")){
    handleSubmit(new Event('submit'));
    }
  }, [code]);

  return (
    <div className="flex flex-col px-2 py-4  items-center mt-24">
      <h1 className="font-bold text-2xl text-black dark:text-white mb-2">Verify Your Email</h1>
      <div
        className=" bg-opacity-60 flex backdrop-filter backdrop-blur-lg border bg-gradient-to-r from-fuchsia-400 to-fuchsia-100 ... border-amber-400 px-5 py-3 rounded-md">
        <form className=" flex gap-2 flex-col items-center justify-center" onSubmit={handleSubmit}>
          <label className="mt-2" htmlFor="verificationCode">Enter the 6-digit code sent to your email address</label>
          <p></p>
          <div className="flex gap-2 justify-betwen">
            {code.map((digit,index)=> (
              <input
                className="w-12 h-12 text-center text-2xl font-bold text-white bg-gray-400 focus:border-amber-500 rounded-lg focus:outline-none"
                key={index}
                id="verificationCode"
                type="text"
                required
                maxLength='6'
                value={digit}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
          <button
            className="text-white border-none px-4 py-2 mt-4 w-full bg-gradient-to-r from-zinc-800 ... rounded-md hover:scale-90 transition-all hover:bg-zinc-800"
            type="submit">{loading ? "Verifying..." : "Verify"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default VerifyUser;