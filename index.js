const express = require("express");
const app=express();
const cors =require("cors");
const jwt =require("jsonwebtoken")
let secKey="hassan"

require("./db/config")
let User=require("./db/user")
let Book=require("./db/book")

app.use(express.json());
const corsConfig={
    origin:"*",
    credential:true,
    methods:["GET","POST"]
}
app.options("",cors(corsConfig))
app.use(cors(corsConfig));
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("api is")
})

app.post("/signup", async (req, resp) => {
    let user = User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    let token = jwt.sign({email:result.email,id:result._id},secKey)
    resp.status(201).json({data:result,token:token})
  });

  app.post("/login", async (req, resp) => {
    if (req.body.email && req.body.password) {
      const user = await User.findOne(req.body).select("-password");
      if (user) {
        resp.send(user);
      } else {
        resp.send("User not found");
      }
    } else {
      resp.send("User not found");
    }
  });

  app.post("/addproduct", async (req, resp) => {
      let book = Book(req.body)
      let result = await book.save()
      resp.send(result)
      console.log(result);
  });



app.listen(5000)