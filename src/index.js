//require('dotenv').config({path:'./env'})

import dotenv from 'dotenv';
import connectDB from './db/index.js';


dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running at Port: ${process.env.PORT}` )
    })
})
.catch((err) => {
    console.log("MONGODB Error",err)
})




























/*

import mongoose from "mongoose";
import { DB_Name } from "./constants";


import express from "express";
const app=express();


( async() => {
   try{

    await mongoose.connect(`${process.env.MongoDbUrl}/${DB_Name}`)
    app.on("error",(error) => {
        console.log("ERROR :", error)
        throw error
    })

    app.listen(process.env.PORT,() =>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })

   } catch(error){
      console.log("ERROR :" ,error)
      throw error
   }
})()

*/