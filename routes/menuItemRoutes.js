const express= require('express')
const router= express.Router()
const MenuItem= require('../models/MenuItem')


router.post('/', async (req, res)=>{
    try{
        const data= req.body
        const newMenu= new MenuItem(data)
        const response= await newMenu.save()
        console.log("Data saved")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Internal server error"})
    }
})

router.get('/', async (req, res)=>{
    try{
        const data= await MenuItem.find()
        console.log("Data fetched")
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({err: "Internal server error"})
    }
})

router.get('/:teste', async (req, res)=>{
    try{
        const teste= req.params.teste
        if(teste==='sweet' || teste==='spicy' || teste==='spon'){
            const result= await MenuItem.find({teste})
            res.status(200).json(result)
        }
        else{
            res.status(200).json({result:"No result found"})
        }
    }
    catch(err){
        console.log(err)
    }
})



module.exports= router