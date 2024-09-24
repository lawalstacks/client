import {useState} from 'react';
import toast from 'react-hot-toast'

const UseFilePreview = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [fileType,setFileType] = useState("")
  const handleFileChange = (e)=>{
    const file = e.target.files[0];

    if(file){
      if(file.type.startsWith("image/") || file.type.startsWith("video/")){

        const reader = new FileReader();
        reader.onloadend = () =>{
          setFileUrl(reader.result);
          setFileType(`${file.type}`)
        }
        console.log(fileType)
        reader.readAsDataURL(file)
      }else {
        toast.error("invalid file type")
        setFileUrl(null)
        return;
      }
    }
  }
  return {
    handleFileChange,fileUrl,setFileUrl,fileType
};
};

export default UseFilePreview;