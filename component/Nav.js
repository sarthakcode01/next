import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (<>
    <div className="navbar">
    <img src="img.png" alt="" className="logo"/>
    <div className="navright"> <Link href="/">Sarthak</Link></div>
    <div className="navleft">
        <ul>
           <Link href="/"><li>  Home</li></Link> 
           <Link href="/about">  <li>About </li></Link> 
           <Link href="/work">  <li>Work</li></Link> 
           <Link href="/contact/signup">  <li>Contact Me</li></Link> 
          
          
          
        </ul>
    </div>
</div>
<hr/> </>
  )
}

export default Nav