import mongoose from "mongoose";

export async function connect() {
    try {
        const a = await mongoose.connect(process.env.MONGO_URI)
        console.log("CONNECTED")


        const conn = mongoose.connection
        conn.on('connected', () => {
            console.log("Server Connected Successfully")
        })
        conn.on('error', (err) => {
            console.log("Pls Make Sure Server Is On")
            console.log(err)
            process.exit()
        })

    } catch (error) {
        console.log("Something Went Wrong")
        console.log(error)
    }


}


