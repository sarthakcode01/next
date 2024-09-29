"use client"
import Image from "next/image";
import Link from "next/link";





export default function Home() {

  return (<>


  

    
   

    <div className="main">
        <div className="main-text">
            <h1>Hi,<br/>I'am <div id="main">Sarthak</div><br/>Web Designer</h1>
            <Link href="/contact/signup"><button type="button" className="main-button">Contact Me</button></Link>
        </div>

        <div className="main-left">
            <img src="img.png" alt="" srcset=""/>
        </div>

    </div>




    

   

   </>
   )

  
}
