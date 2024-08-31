import Logo from '../../../assets/vite.svg'
import {useState} from 'react'
const Publish = () => {
  const[cards, setCards] = useState("")
  const[modal, setModal] = useState(false)
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(false);


    return (
      <>
        <div className={modal?"fixed top-0 bottom-0 left-0 text-black backdrop-filter z-20 bg-opacity-50 bg-black right-0":"hidden"}>
          <div className="bg-white border-2 border-amber-400 rounded-2xl mx-auto flex flex-col gap-2 max-w-96 py-5 px-5 items-center mt-24">
            <div className="">
              <div className="h-6 flex-row-reverse flex">
                <div
                  className="bg-amber-400 h-6 w-6 text-l font-bold rounded-full flex flex-row cursor-pointer hover:bg-amber-200 hover:p-4 active:p-0 transition-all active:bg-amber-400 justify-center items-center"
                  onClick={() => (setModal(false))}>x
                </div>
              </div>
              <label className="mt-10">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter your title"
                className="rounded-xl min-w-10 flex p-2"
              />
              <label>Image/Video</label>
              <svg> {Logo}</svg>
              <input
                type="file"
                id="file"
                name="file"
              />
            </div>
          </div>
        </div>
        <div className="dark:text-white w-full">
          Publish Content
          <div className="text-2xl w-full items-center flex gap-4 relative">Create New Card! <div className="rounded-full bg-amber-400 flex h-5 w-5 transition-all justify-center items-center hover:bg-amber-200 hover:p-3 absolute -right-8 cursor-pointer active:p-0 active:bg-amber-400 text-black text-2xl font-bold" onClick={()=>(setModal(true))}>+</div></div>
            <div className="text-gray-500 font-md">{cards.length=== 0?"Your Content is Empty":"Looks Good"} </div>
          <div></div>
        </div>
      </>
    );
}
export default Publish;