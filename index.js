const express = require("express")

const server=express()

const cors = require("cors")
const logic = require('./service/logic')

//connect with frontend
server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

//port setting for server

server.listen(8000,()=>{
    console.log("server started at port 8000");
})

server.get('/getAllEmployee',(req,res)=>{
      logic.allEmployee().then(result=>{
        res.status(result.statusCode).json(result)
      })
})