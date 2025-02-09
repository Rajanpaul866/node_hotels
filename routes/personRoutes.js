const express= require('express')
const router= express.Router()
const Person= require('../models/Person')

router.post('/', async (req, res)=>{
    try{
        const data= req.body
        const newPerson= new Person(data)
        const response= await newPerson.save()
        console.log("Data saved")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"Internal server error"})
    }
})


router.get('/', async (req, res)=>{
    try{
        const data= await Person.find()
        console.log("Data fetched")
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"Internal server error"})
    }
})


router.get('/:workType', async (req, res)=>{
    try{
        const workType= req.params.workType
        if(workType==='chef' || workType==='manager' || workType==='waiter'){
            const response= await Person.find({work:workType})
            console.log("Response fetched")
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error:"Invalid worktype"})
        }
    }
    catch(err){
        res.status(500).json({err:"Internal Server error"})
    }
})

router.put('/:id', async (req, res)=>{
    try{
        const personId= req.params.id
        const updatedPersonData= req.body

        const response= await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // Return the updated document
            runValidators: true, // Run mongoose validation
        })

        if(!response){
            return res.status(404).json({error: "Person not found"})
        }
        console.log("Data updated")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const personId= req.params.id
        
        const response= await Person.findByIdAndRemove(personId)

        if(!response){
            return res.status(404).json({error: "Person not found"})
        }
        res.status(200).json({message: "Person deleted successfully"})
    }
    catch(err){
        res.status(500).json({error:"Internal server error", err})
    }
})


module.exports= router