const mongoose=require("mongoose");

let bookSchema = new mongoose.Schema({
    name:String,
    img:String,
    price:String,
    category:String,
    subcategory:String,
    desc:String,
    stock:String,
})

module.exports=mongoose.model("books",bookSchema)