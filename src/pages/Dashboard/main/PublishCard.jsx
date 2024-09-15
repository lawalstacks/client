import axios from 'axios'
import {useRecoilValue} from 'recoil';
import userAtom  from '../../../atoms/userAtom.js';
import { useRef, useState,useEffect } from 'react';
import useFilePreview from '../../../Hooks/useFilePreview.js';
import {FaRegFileImage} from 'react-icons/fa';
import { Compact} from '@uiw/react-color';
import { RiPaletteFill } from 'react-icons/ri';
import toast from 'react-hot-toast'
import Lottie from 'react-lottie';
import animationDone from '../../../lotties/creationDone.json'
import animationData from '../../../lotties/Cardcreated2.json'
import { FaHandHoldingDollar } from 'react-icons/fa6';
import Loader from '../../../assets/Pulse@1x-1.0s-200px-200px.svg';
import { MdAddCircle, MdDone} from 'react-icons/md';
const MAX_CHAR = 100;

const PublishCard = () => {
  const[title,setTitle] = useState("");
  const[cards,setCards] =useState(null)
  const [reverseCards, setReverseCards] = useState(null)
  const [postText, setPostText] = useState("")
  const[modal, setModal] = useState(false)
  const[repeat, setRepeat] = useState(false)
  const [loading, setLoading] = useState(false);
  const[done,setDone] = useState(false)
  const [amount,setAmount] = useState(0)
  const [showTip,setShowTip] = useState(false)
  const {handleFileChange,fileUrl,setFileUrl,fileType} = useFilePreview();
  const [showColor,setShowColor] = useState(false)
  const fileRef = useRef(null);
  const [cardColor,setCardColor] = useState("#202124");
  const [remChar, setRemChar] = useState(MAX_CHAR);
  const user = useRecoilValue(userAtom);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const doneOptions = {
    loop: false,
    autoplay: true,
    animationData: animationDone,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const handleRepublish = ()=>{
      setRepeat(false);
      setModal(true);
  }
  const handleTextChange = (e)=>{
    setDone(false)
    const inputText = e.target.value;
    if(inputText.length > MAX_CHAR){
      const truncatedText = inputText.slice(0,MAX_CHAR);
      setPostText(truncatedText);
      setRemChar(0)
    }else{
      setPostText(inputText);
      setRemChar(MAX_CHAR - inputText.length)
    }
  }

  const handleCreateCard = async(e)=>{
    e.preventDefault()
    console.log(user._id)
    try {
      setLoading(true)
      const response = await axios.post('/api/card/create', {
        postedBy: user._id,
        title: title,
        details: postText,
        color: cardColor,
        media: fileUrl,
        goalAmount: amount
      })
      if (response.error){
        toast.error(response.error.message)
      }
      toast.success(response.data.message);
      setTitle("");
      setPostText(null)
      setFileUrl("")
      setAmount(0)
      setRepeat(true)
      setCardColor("#202124");
      console.log(cards)
    }catch (error) {
      toast.error("🫣 Error try again, tips: title may have been used or file too large")
    }finally {
      setLoading(false)
      }
  }

  useEffect(()=>{
      const getUser = async()=>{
        try{
          const res = await axios.get(`/api/${user._id}`)
          if(res.error){
           return toast.error("error loading card")
          }
          setReverseCards(res.data.cards.slice().reverse())
          setCards(reverseCards)
          }catch(error){
          console.log(error.response?.data.message+":"+"error to load card")
            toast.error(error.response?.data.message+":"+"error to load card")
          setCards(null)
        }
      }
      getUser();
  },[cards])


    return (
      <>
        <div  className={modal?"fixed top-0 bottom-0 left-0 text-black backdrop-filter z-20 bg-opacity-50 bg-black right-0":"hidden"}>
          {repeat?<div className="rounded-md mx-auto flex flex-col gap-4  py-5 items-center mt-8"><p className="text-white font-bold text-3xl ">Card created Successfully!</p>
            <div className="relative right-5"
            >
              <Lottie
                options={defaultOptions}
                height={250}
                width={400}
              />
              <div className="absolute top-5">
                <Lottie
                  options={doneOptions}
                  height={500}
                  width={500}
                />
              </div>
              <div className="items-center absolute right-16 z-40 justify-center flex gap-4 text-white font-bold"><button className=" bg-amber-400 hover:bg-amber-200 rounded-md p-2 flex gap-2 items-center justify-center" onClick={()=> setModal(false)}>Done <MdDone/></button><button className="flex border hover:bg-fuchsia-300 rounded-md gap-2 p-2 items-center justify-center" onClick={()=>setRepeat(false)}>Add more <MdAddCircle/></button></div>
            </div>

          </div> : <div style={{ background: `${cardColor}` }}
                        className={`  rounded-md mx-auto flex flex-col gap-4 max-w-96 py-5 px-5 items-center mt-8`}>
          <div className="">
              <div className="h-6 flex-row-reverse flex">
                <div
                  className="bg-amber-400 text-white h-6 w-6 text-l font-bold rounded-full flex flex-row cursor-pointer hover:bg-amber-200 hover:p-4 active:p-0 transition-all active:bg-amber-400 justify-center items-center"
                  onClick={() => (setModal(false))}>x
                </div>
              </div>
                <form onSubmit={handleCreateCard}>

                  <label
                    className="mt-10 border bg-white backdrop-filter bg-opacity-60 px-2 font-bold rounded-xl">Title</label>
                  <input
                    type="text"
                    required
                    maxLength={20}
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your title"
                    className="rounded-md outline-0 border border-gray-400 min-w-10 mt-2 mb-2 h-10 flex p-2"
                  />
                  <label
                    className="bg-white border backdrop-filter bg-opacity-60 px-2  font-bold rounded-xl">Details</label>
                  <textarea
                    className="rounded-md border border-gray-400 flex mt-2 w-full"
                    rows={3.5}
                    required
                    maxLength={MAX_CHAR}
                    id="details"
                    name="details"
                    onChange={handleTextChange}
                    placeholder="Details of your card" />
                  <div className="flex  justify-between mb-2 mt-2  px-2 font-bold rounded-xl ">

                    <div className="flex"><label
                      className="backdrop-filter bg-opacity-60 border px-2 bg-white font-bold rounded-xl">Media</label><input
                      type="file"
                      id="imageVideo"
                      name="imgaeVideo"
                      ref={fileRef}
                      hidden
                      onChange={handleFileChange}
                    />
                      <FaRegFileImage className="text-amber-300 ml-2" size={24} style={{ cursor: 'pointer' }}
                                      onClick={() => fileRef.current.click()} />
                    </div>
                    <p
                      className="bg-white backdrop-filter bg-opacity-60 px-2 rounded-xl">{remChar}/{MAX_CHAR}</p>
                  </div>
                  {fileUrl && (
                    <div
                      className="object-cover bg-opacity-45 backdrop-blur bg-dark-tremor-background-subtle backdrop-filter rounded-md p-2 my-5 relative">
                      <div
                        className="w-6 text-sm h-6 flex items-center text-white justify-center z-20 rounded-full absolute bg-dark-tremor-background cursor-pointer hover:h-7 hover:w-7 active:h-6 active:w-6  transition-all font-bold backdrop-filter bg-opacity-45 top-4 right-4"
                        onClick={() => setFileUrl('')}>x
                      </div>
                      <div className="flex justify-center items-center">{fileType.startsWith('image/') ?
                        <img src={fileUrl} className="h-48 rounded-md"
                             alt="selected file" /> :
                        <video className="h-48 rounded-md" src={fileUrl} controls />}</div>
                    </div>
                  )}
                  <div className="flex justify-between gap-2 mt-4 mr-2 items-center">
                    <p
                      className="flex border ml-2 bg-white backdrop-filter w-44 justify-center h-8 bg-opacity-60 px-2 font-medium rounded-2xl items-center gap-2">choose
                      theme <span className=""><RiPaletteFill
                        className="hover:bg-dark text-amber-300 cursor-pointer active:bg-gray-200 rounded-full bg-white active:shadow-xl active:p-1"
                        size={24} onClick={() => setShowColor(true)} /></span></p>
                    <div className="flex justify-center items-center gap-2 "><span
                      className="backdrop-filter text-green-500 h-8 font-bold rounded-xl flex items-center cursor-pointer relative ">{showTip && (
                      <span
                        className=" bg-dark-tremor-background-subtle bg-opacity-45  rounded-2xl transition-all flex p-2 w-36 justify-center bottom-4 absolute  text-sm text-white font-bold">set fund amount</span>)}<FaHandHoldingDollar
                      size={30} onMouseEnter={() => setShowTip(true)}
                      onMouseLeave={() => setShowTip(false)} /></span><input type="number" aria-valuemin="0"
                                                                             placeholder="Goal"
                                                                             id="amount"
                                                                             name="amount"
                                                                             value={amount}
                                                                             onChange={(e) => setAmount(e.target.value)}
                                                                             className="rounded-full w-16 h-8 border-green-400 border-2" />
                    </div>
                  </div>
                  <div className="flex justify-center  items-center">
                    {loading ? <button
                        className="text-white font-bold w-full flex items-center justify-center border-none px-4 py-1.5 mt-4 italic  rounded-md mx-3 bg-zinc-700 transition-all "
                        type="submit"><img src={Loader} />
                      </button> :

                      <button
                        className="text-white w-full font-bold flex items-center justify-center border-none px-4 py-2 mt-4 italic bg-gradient-to-r from-zinc-800 ... rounded-md active:scale-90 hover:scale-80 transition-all hover:bg-zinc-600"
                        type="submit">{done ? 'Done ⚡' : 'publish'}
                      </button>}
                  </div>
                </form>

            </div>
          </div>}
          <div className="flex items-center justify-center mr-20">
            {showColor ? <div className="absolute z-20 transition-all ml-20 mb-44 ">
              <div className="">
                <div
                  className="bg-[#F6F6F6] active:font-bold cursor-pointer w-24 transition-all h-6 px-2 mt-2 mb-2  hover:bg-fuchsia-300 active:shadow-xl text-sm flex items-center justify-center rounded-xl"
                  onClick={() => setShowColor(false)}>close
                </div>
                <Compact
                  style={{}}
                  color={cardColor}
                  onChange={(color) => {
                    setCardColor(color.hex);
                  }} />
              </div>
            </div> : ''}
          </div>
        </div>

        <div className="dark:text-white w-full">
          Publish Content
          <div className="text-2xl w-full items-center flex gap-4 relative">Create New Card! <div
            className="rounded-full bg-amber-300 flex h-6 w-6  transition-all justify-center items-center hover:bg-amber-200 hover:p-4 absolute -right-8 cursor-pointer active:p-0 active:bg-amber-400 text-black text-2xl font-bold"
            onClick={() => handleRepublish()}>+</div></div>
          <div className="text-gray-500 font-md">{cards?.length === 0 ? "Your Content is Empty" : "Looks Good"} </div>
          <div>
            <div className="grid grid-cols-3 flex-row-reverse text-dark-tremor-background">
              {cards?.map((card,index)=> (
                <div className="bg-dark p-2" key={index}>
                  <div className="flex flex-col gap-2 p-3 border rounded-lg shadow-lg  my-3" style={{background:`${card.color}`}}>
                   <p>{card.title}</p>
                    <p>{card.details}</p>
                    {card.media?.endsWith('/cardMedia.jpg')?"its here":"no"}
                    <img height={200} src={card.media}/>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </>
    );
}
export default PublishCard;