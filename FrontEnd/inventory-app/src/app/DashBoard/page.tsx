'use client'
import {useRouter} from "next/navigation";
import Link from "next/link";
import styles from './dashboard.module.css'
import Image from 'next/image'
import searchIcon from '../Resources/360_F_599848646_MdK7wVDJQZygObyKEahVkOuhh0IGdTt3.jpg'
import addIcon from '../Resources/addInv.png'
import updateIcon from '../Resources/update.png'
import addCarsIcon from '../Resources/carIcon.png'
import { relative } from "path";

export default function DashBoard(){
  const router = useRouter();
  const handleClick =()=>{
    router.push("/DashBoard/SearchPage");
  }

  const addPartsClick =()=>{
    router.push("/DashBoard/AddPage");
  }

  const updateInvClick =()=>{
    router.push("/DashBoard/UpdateInvPage");
  }


  const addCarsClick =()=>{
    router.push("/DashBoard/AddCarsPage");
  }
  
    return(
      <div className={(styles.boxDash)}>
       
<div className={(styles.card)}>
  <div style={{display:"flex", justifyContent:"center"}}>
<Image  className="logo"
                alt=""
               src={searchIcon}
               width={150}
               height={200}   
            />
            </div>
            <button className={(styles.searchNavButton)} onClick={handleClick}> Search For Parts</button>
          
</div>
<div className={(styles.card)}>
  <div style={{display:"flex", justifyContent:"center"}}>
<Image  className="logo"
                alt=""
               src={addIcon}
               width={150}
               height={200}   
            />
            </div>
<button className={(styles.navAddPartsBu)} onClick={addPartsClick}> Add Parts To Inventory</button>
</div>

<div className={(styles.card)}>
  <div style={{display:"flex", justifyContent:"center"}}>
<Image  className="logo"
                alt=""
               src={addCarsIcon}
               width={150}
               height={200}   
            />
            </div>
<button className={(styles.navAddCarsBu)} onClick={addCarsClick}> Add New Cars To Inventory</button>
</div>

<div className={(styles.card)}>
  <div style={{display:"flex", justifyContent:"center"}} >
<Image  className="logo"
                alt=""
               src={updateIcon}
               width={150}
               height={200}   
            />
            </div>
<button className={(styles.navUpdateInvBu)} onClick={updateInvClick}> Update/Modify Inventory</button>
</div>           
      </div>
    
    )
    
  }