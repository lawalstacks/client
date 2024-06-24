import {Link} from "react-router-dom";
import Logo from '../assets/Logo.png'
import {AiFillProfile} from "react-icons/ai";

const Header = () => {

    return (
        <div className="flex justify-between  items-center rounded-md bg-amber-500 m-3 h-12 px-2">
            <div className="">
                <Link to='/'><img width={45} src={Logo} alt="Logo"/></Link>
            </div>
            <div className="flex justify-evenly items-center">
                    <div className="hidden"><img src={<AiFillProfile/>} /></div>
                        <button className="bg-gradient-to-r from-zinc-800 ... rounded-md hover:scale-95 hover:bg-zinc-800 transition-all text-white py-1 px-4 mx-1"><Link to="/login">Login</Link></button>
                        </div>
                        </div>
                        );
                    };

export default Header;