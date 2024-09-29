import { NextResponse } from "next/server";
import User from "@/Model/user";
import { connect } from "@/dbconfig/dbconnect";
import bcryptjs from "bcryptjs"


connect()

export async function POST(request) {

    try {
        const userdata = await request.json()
        const {username, email, password } = userdata

        //checking for user 
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({
                error: "User Already Exist"
            })

        }


        //hashing pass
        const salt = await bcryptjs.genSalt(10)
        const hashedpass = await bcryptjs.hash(password,salt)
       

        //saving User
        const createdUser = new User({
            username,
            email,
            password:hashedpass,
        })
        console.log(createdUser.username)

        const saveduser = await createdUser.save()
       
        return NextResponse.json({
            success: true,
            message: "User Created Successfully..",

        })

    } catch (error) {
        return NextResponse.json({
            error:error
        })

    }

}