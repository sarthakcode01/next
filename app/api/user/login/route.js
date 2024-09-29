import jwt from "jsonwebtoken"
import User from "@/Model/user"
import { NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import { connect } from "@/dbconfig/dbconnect"



connect()

export async function POST(request){


    try {
        const userdata = await request.json()
        const {email, password}= userdata
        // console.log(email, password)
    
        // checking for user
        const user= await User.findOne({email})
       
        if(!user){
            return NextResponse.json({
                error:"User Not Exist"
            })
        }

        // checking for password
       
    
        const userpass = await bcryptjs.compare(password, user.password)
        
        if(!userpass){
            return NextResponse.json({
                message:"Password Is Incoorect.."
            })
        }
    
    
        const tokenData ={
            id:user._id,
            email:user.email,
            username: user.username
        }
        const token = jwt.sign(tokenData,process.env.TOKEN_SRC,{expiresIn:"1d"})
    
        const response = NextResponse.json({
            success:"User LoggedIn"
        })
        response.cookies.set("logger",token,{
            httpOnly:true
        })
        return response
        
    } catch (error) {
        return NextResponse.json({
            error:error
        })
    }
  
}


