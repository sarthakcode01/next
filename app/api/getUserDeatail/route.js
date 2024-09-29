import { connect } from "@/dbconfig/dbconnect";
import User from "@/Model/user";


export async function GET(){
    connect()
    const user = await User.findOne()


}