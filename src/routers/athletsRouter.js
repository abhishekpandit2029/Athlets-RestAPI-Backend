const express = require("express");
const athletRanking = require("../models/athlet")
const router = new express.Router();


router.post("/mens", async(req,res)=>{ 
    try {
        const user = new athletRanking(req.body)
        // console.log(req.body)
        const createAthlet = await user.save()
        res.status(201).send(createAthlet)
    } 
    catch (error) {
        res.status(400).send(error) 
    } 
})

router.get("/mens", async(req,res)=>{
    try {
        const athletsData = await athletRanking.find()
        res.send(athletsData)
    }
    catch (error) {
        res.send(error)
    } 
})

router.get("/mens/:id", async (req, res) => {
    try{
        const id = req.params.id;
        // console.log(_id)
        const athletData = await athletRanking.findById(id);
        // console.log(athletData)
        if(!athletData) {
            return res.status(404).send();
        }
        else{
            res.send(athletData);
        }
    }
    catch(e){
        res.status(500).send(e);
    }
})

router.delete("/mens/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const deleteathlet = await athletRanking.findByIdAndDelete(id);
        console.log(deleteathlet)
        if(!deleteathlet) {
            return res.status(404).send();
        }
        else{
            res.send(deleteathlet);
        }
    }
    catch(e){
        res.status(500).send(e);
    }
})

router.patch("/mens/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const updateathlet = await athletRanking.findByIdAndUpdate(id, req.body, {new : true});
        res.send(updateathlet);
    }
    catch(e){
        res.status(500).send(e);
    }
})

module.exports = router