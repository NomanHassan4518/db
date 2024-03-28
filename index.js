const express = require("express");
const app=express();
const cors =require("cors");

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
    resp.send(result);
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