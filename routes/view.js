const express = require('express')
const router = express.Router()
const path = require('path')

function TimeDate(req, res, next){
    console.log(req.originalUrl,currentdate.getDay());
    if((currentdate.getHours()>9) && (currentdate.getHours()<17) && (currentdate.getDay() > 0) && (currentdate.getDay() < 6))
    next();
    else {
        res.send("we Are only available from Monday to Friday, from 9h to 17h")
    }
}
router.get('/',TimeDate,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','home.html'))
})
router.get('/contactus',TimeDate,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','contactus.html'))
})
router.get('/OurServices',TimeDate,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','OurServices.html'))
})
module.exports=router