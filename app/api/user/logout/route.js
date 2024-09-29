import { NextResponse } from "next/server"


export async function GET(request){

    try {
        const response = NextResponse.json({
            message:"user logged out successfully"
        })
        response.cookies.set("log","", {expires: Date.now()})
        return response
        
    } catch (error) {
        return NextResponse.json({
            error:error.message,
            status: 500
        })
        
    }
    
   
}