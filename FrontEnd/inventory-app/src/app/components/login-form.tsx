import React, { useState } from "react";
import Link from "next/link";
import styles from './login-form.module.css'
import Image from 'next/image'
import logo from '../Resources/InternationalUAPLogo2.png'

export default function LogInForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('');

    const handleSubmit=(e) =>{
        e.preventDefault();
    }
    return(
        <div className ={(styles.login_box)}>
            <div style={{display:"flex", justifyContent:"center"}}>
             <Image  className="logo"
                alt=""
               src={logo}
               width={150}
               height={200}   
            />
            </div>
          <form onSubmit = {handleSubmit}>
            <label>Username: 
            <input type="text" value={username} onChange={(e) => setUsername}></input>
            </label>
        <br></br>
            <label>Password :
            <input type="text" value={password} onChange={(e) => setPassword}></input>
            </label>
        <br></br>
            </form>
            <button className={(styles.button)} type="submit">LOG IN</button> {/*this one is the one that will log you in to the DashBoard page.*/}
        </div>
    )
}