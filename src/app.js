const express = require("express")
require("../src/db/connection")
const router = require("../src/routers/athletsRouter")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())  
app.use(router)

// You DO NOT NEED express.json() and express.urlencoded()
// for GET Requests or DELETE Requests. We only need it for
// post and put req.
// express.json() is a method inbuilt in express to recognize the incoming
// Request Object as a JSON Object. This method is called as a middleware
// in your application using the code: app.use(express.json());

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`)
}) 

