'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'



const login = () => {

  const [user, setuser] = useState({email: "", password: "" })
  const [processing, setprocessing] = useState(false)
  const [signupbtn, setsignupbtn] = useState(false)
  const router= useRouter()

  async function handleSubmit(){
    setprocessing(true)
    console.log(user)
    const userdata= await axios.post("/api/user/login",user)
    console.log(userdata)
    setprocessing(false)
    router.push("/profile")

    

  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length >0){
      setsignupbtn(true)

    }
   
  
   
  }, [user])
  

  return (
   

    <div className='ab'>
   
      <div className='form'>
        <h1 className='head'>{processing?"Processing...":"Log In..."}</h1>
        <label htmlFor="name" className='label'>Email</label>
        <input type="email" name="" id="" value={user.email} onChange={(e) => { setuser({ ...user, email: e.target.value }) }}/>
        <label htmlFor="name" className='label'>Password</label>
        <input type="password" name="" id="" value={user.password} onChange={(e) => { setuser({ ...user, password: e.target.value }) }}/>
        <button type='submit' className='submit' onClick={handleSubmit}>{signupbtn?"Log In":"No Log In"}</button>
        <div>Already Have an Account?<Link href="/contact/signup">click here</Link></div>
      </div>
    </div>

  )

}

export default login