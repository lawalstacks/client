import {Link} from "react-router-dom";
import Logo from '../assets/Logo.png'
import {AiFillProfile} from "react-icons/ai";
import LoginButton from './LoginButton.jsx';
import LogoutButton from './LogoutButton.jsx'
import {useRecoilValue} from 'recoil';
import userAtom from '../atoms/userAtom.js'

const Header = () => {
const user = useRecoilValue(userAtom);
    return (
        <div className="flex justify-between  items-center rounded-md bg-amber-500 m-3 h-12 px-2">
            <div className="">
                <Link to='/'><img width={45} src={Logo} alt="Logo"/></Link>
            </div>
            <div className="flex justify-evenly items-center">
                    <div className="hidden"><img src={<AiFillProfile/>} /></div>
              {user?<LogoutButton/>:""}
                        </div>
                        </div>
                        );
                    };

export default Header;