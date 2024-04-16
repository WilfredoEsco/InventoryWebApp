
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function SearchPage(){
  const router = useRouter();
  const handleClick =()=>{
    console.log("YErrrr");
    router.push("/DashBoard");
  }
  
    return(
    <>
    <button onClick ={handleClick}>Home</button>
    <h1>Inventory Search Page</h1>
    </>
    
    );
  }
  
  