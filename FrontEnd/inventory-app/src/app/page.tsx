
'use client'
import Link from "next/link";
import {useRouter} from "next/navigation";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import logo from '../app/Resources/InternationalUAPLogo2.png'
import { text } from "stream/consumers";

export default function Home(){
  const router = useRouter();
  const handleClick =()=>{
    console.log("YErrrr");
    router.push("/login");
  }
  
    return(
    <>
    <div style ={{ display:"flex",justifyContent:"center"}}>
    <Image 
    className="logo"
    alt=""
      src={logo}
      width={400}
      height={40}
      />
    </div>
      <div style={{display:"flex",justifyContent:"center",backgroundColor:"black"}}>
      <Button onClick ={handleClick} color ="primary">Log In</Button> {/*this button takes you to the logIn page*/}
      </div>
   
    
    
    </>
    
    );
  }

