const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://abhishekpandit1212:abhishekpandit1212@cluster0.cswtyhy.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connection successful....")
})
.catch(()=>{
    console.log(err)  
}) 