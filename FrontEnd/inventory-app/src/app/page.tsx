"use client"
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Home(){
  const router = useRouter();
  const handleClick =()=>{
    console.log("YErrrr");
    router.push("/login");
  }
  
    return(
    <>
    <button onClick ={handleClick}>Log In</button>
    <h1>Welcome!</h1>
    </>
    
    );
  }

