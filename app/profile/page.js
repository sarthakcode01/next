"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { connect } from '@/dbconfig/dbconnect'
import { NextResponse } from 'next/server'
import jwt from "jsonwebtoken"



const profile = () => {
  const router = useRouter()

  async function handleLogout() {
    await axios.get("/api/user/logout")
    router.push("/contact/login")

  }

  async function getDeatail() {
    const res = NextResponse.json({
      success: true
    })
    // const cook = res.cookies.get("logger")
    const cook = res.cookies.get("logger",{
      httpOnly:true
  })
    console.log(cook)

    return res
  }
  return (
    <div>
      profile

      <button onClick={handleLogout}>Logout </button>
      <button onClick={getDeatail}>Get My Deatail </button>

    </div>

  )
}

export default profile




// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzM2NzE1NWIxZTE0YmE3MjJlYjMzZCIsImVtYWlsIjoic2EiLCJ1c2VybmFtZSI6InNhcnRoYWsiLCJpYXQiOjE3MjQxMjczNzksImV4cCI6MTcyNDIxMzc3OX0.zht5sp3SXVZ3tV61FR0fPC9s8p04EPvtx596043W5l0