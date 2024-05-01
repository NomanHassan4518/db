const mongoose =require("mongoose")

let uri="mongodb://malikhassanhu55:hassan4518@ac-nur02xp-shard-00-00.brb9qki.mongodb.net:27017,ac-nur02xp-shard-00-01.brb9qki.mongodb.net:27017,ac-nur02xp-shard-00-02.brb9qki.mongodb.net:27017/?ssl=true&replicaSet=atlas-m47e0y-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri) 