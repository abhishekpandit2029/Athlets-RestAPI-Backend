const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/athletsAPI")
.then(()=>{
    console.log("connection successful....")
})
.catch(()=>{
    console.log(err)  
}) 
  
