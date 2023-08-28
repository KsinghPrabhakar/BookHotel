import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';

const app = express()
dotenv.config()
const port =  8000
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO) 
        console.log('database  connected')
    } catch (error) {
        throw(error )
    }
};
mongoose.connection.on("disconnected", ()=>{
    console.log("Database Disconnected!")
})


// middleware
app.use("api/auth", authRoute)
app.use("api/users", usersRoute)
app.use("api/hotels", hotelsRoute)
app.use("api/rooms", roomsRoute)



app.listen(port, ()=>{
    connect()
    console.log(`server is runing on ${port}`)
}) 

app.get("/",(req, res)=>{
    res.send("hello")
})

