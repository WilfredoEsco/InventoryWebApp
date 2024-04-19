'use client'
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function SearchPage(){
  const router = useRouter();
  const handleClick =()=>{
    console.log("Going Home");
    router.push("/DashBoard");
  }
  
    return(
    <>
    <button onClick ={handleClick} style={{color:"white", backgroundColor:"black", border:"2px"}}>Home</button>
    <h1>Inventory Search Page</h1>
    </>
    
    );
  }
  
  