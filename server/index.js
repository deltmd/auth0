require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')

const app=express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
  domain:'',
  clientID:'',
  clientSecret:'',
  callbackURL:''
}, function(accessToken, refreshToken, extraParams, profile, done){

}))




app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listen on port: ${process.env.SERVER_PORT}`)
})