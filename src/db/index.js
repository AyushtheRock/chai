


import mongoose from "mongoose";
import { DB_Name } from "../constants.js";


const connectDB = async () => {

      try{

       const connectionInstance = await mongoose.connect(`${process.env.MongoDbUrl}/${DB_Name}`)
       console.log(`/n MongoDB Connection Successful !! DB Host: ${connectionInstance.connection.host}`)

      } catch(error) {
         console.log("MONGODB CONNECTION ERROR",error)
         process.exit(1)
      }


}

export default connectDB;