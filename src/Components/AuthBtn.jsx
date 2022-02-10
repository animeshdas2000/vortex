import React,{useContext} from 'react'
import {GoogleAuth,logout} from "../services/Auth"
import {FcGoogle} from "react-icons/fc"
import {FiLogOut} from "react-icons/fi"
import { UserContext } from '../context/userContext'
import { Link,useNavigate } from 'react-router-dom'


function AuthBtn() {
  const {user} = useContext(UserContext);
  let navigate = useNavigate();
  return (
    <>
    {
      !!user?(
        <>
        <button className='login-btn' 
         onClick={()=>{
           logout();
           navigate("/");
        }} >{user.displayName} <span> <FiLogOut/></span></button>
        </>
      ):(
       
        <button className="login-btn" onClick={()=>{GoogleAuth().then(()=>{
          navigate("/bitcoin")
        })}}>
            <FcGoogle size={20}/>
            <span>
            Sign In</span>
        </button>
      )

    }
       
    </>
  )
}

export default AuthBtn