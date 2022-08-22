import React from 'react'
import { auth,provider } from "../firebase";
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom";


function Login({setIsAuth}) {
  let navigate= useNavigate();
const signinwithgoogle=() =>{
    signInWithPopup( auth,provider).then((result) =>{
   
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      navigate("/");
    });

};

  return (<div className='loginpage'>
    <p>sign in  with google to  continue</p>
    <button className='login-with-google-btn' onClick={signinwithgoogle}>
        sing in with google
    </button>
  </div>
  );
};


export default Login;