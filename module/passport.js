const GoogleWin = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../DB/User')
module.exports = (passport) => {
    passport.use(new GoogleWin({
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken , refreshToken , profile , done ) => {
console.log(profile)
    }
    ))
    passport.serializeUser((user , done) => {
done(null , user.id)
    })
    passport.deserializeUser((id , done) => {
        User.findById(id , (err, user) => {
            done(err, user)
        })
            })
}