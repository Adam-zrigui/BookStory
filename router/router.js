const express = require('express')
const router =  express.Router()
const path = require('path')




//login/



router.get('/', (req , res) => {res.render('../views/Layouts/Login' ,{
    layout : 'login',
    body: "welcome to book story " 
})})


//DASH
router.get('/dashboard',(req , res) => {res.status(200).render("../views/Layouts/dashboard")} )



module.exports = router;