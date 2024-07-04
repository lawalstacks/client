import {useRecoilValue} from 'recoil';
import React from 'react';
import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import authScreenAtom from '../atoms/authAtom.js'
import {useSetRecoilState} from 'recoil';
import userAtom from '../atoms/userAtom.js';


const AuthPage = () => {
    const authScreenState = useRecoilValue(authScreenAtom);
    const setUser = useSetRecoilState(userAtom);
    console.log(authScreenState);
    return (
        <>
            {authScreenState === 'Login'?<Login/>:<Signup/>}
        </>
    );
};

export default AuthPage;