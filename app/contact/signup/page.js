'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'



const signup = () => {

  const [user, setuser] = useState({ username: "", email: "", password: "" })
  const [processing, setprocessing] = useState(false)
  const [signupbtn, setsignupbtn] = useState(false)
  const router= useRouter()

  async function handleSubmit(){
    setprocessing(true)
    console.log(user)
    const userdata= await axios.post("/api/user/signup",user)
    console.log(userdata)
    setprocessing(false)

    router.push("/contact/login")

    

  }

  useEffect(() => {
    if(user.username.length > 0 && user.email.length > 0 && user.password.length >0){
      setsignupbtn(true)

    }
   
  
   
  }, [user])
  

  return (
   

    <div className='ab'>
   
      <div className='form'>
        <h1 className='head'>{processing?"Processing...":"Sign Up..."}</h1>
        <label htmlFor="name" className='label'>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => { setuser({ ...user, username: e.target.value }) }}
          placeholder={user.username}
        />
        <label htmlFor="name" className='label'>Email</label>
        <input type="email" name="" id="" value={user.email} onChange={(e) => { setuser({ ...user, email: e.target.value }) }}/>
        <label htmlFor="name" className='label'>Password</label>
        <input type="password" name="" id="" value={user.password} onChange={(e) => { setuser({ ...user, password: e.target.value }) }}/>
        <button type='submit' className='submit' onClick={handleSubmit} {...signupbtn?`style="cursor: not-allowed;"`:""}>{signupbtn?"Sign Up":"No Sign Up"}</button>
      </div>
      <div>Already Have an Account?<Link href="/contact/login">click here</Link></div>
    </div>

  )

}

export default signup