const express = require("express");
const app=express();
const cors =require("cors");
const jwt =require("jsonwebtoken")
let secKey="hassan"

require("./db/config")
let User=require("./db/user")

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("api is working")
})

app.post("/signup", async (req, resp) => {
    let user = User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    let token = jwt.sign({email:result.email,id:result._id},secKey)
    resp.status(201).json({data:result,token:token})
  });

  app.get("/data",(req,res)=>{
    let data=[
        {
            name:"hassan"
        },
        {
            name:"hassan"
        },
        {
            name:"hassan"
        },
        {
            name:"hassan"
        },
    ]
    res.send(data)
  })



app.listen(5000)