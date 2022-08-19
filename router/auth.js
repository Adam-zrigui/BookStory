const express = require('express')
const passport = require('passport')
const router =  express.Router()

//login/



router.get('/google', passport.authenticate('google',{ scope:['profile']}))


//DASH
router.get('/google/callback', passport.authenticate('google', {failureRedirect:'/'}),(req ,res) => {
    res.redirect('/dashboard')
}) 



module.exports = router;