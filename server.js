// // const newFile= require('./new')
// // console.log(newFile.age)


// const _ = require('lodash')
// let data= ['name', 'joydeep', 'joydeep', '34', 55, '34']
// var unique_data= _.uniq(data)
// console.log(unique_data)

const express= require('express')
const app= express()
const bodyParser= require('body-parser')
// db connection
const db= require('./db')
//Person model
const Person= require('./models/Person')
const MenuItem= require('./models/MenuItem')

app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("Hello World")
})








// using route file 
const personRoutes= require('./routes/personRoutes')
app.use('/person', personRoutes)
const menuItemRoute= require('./routes/menuItemRoutes')
app.use('/menu', menuItemRoute)


// app.get('/chicken', (req, res)=>{
//     res.send("Chicken will be delivered")
// })

app.listen(3000)