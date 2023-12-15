var express = require('express')
var passport = require('passport')
var { compareSync, hashSync } = require('bcrypt')
var LocalStrategy = require('passport-local').Strategy
var GoogleStrategy = require('passport-google-oauth20').Strategy
var UserService = require('../services/userService')
var dotenv = require('dotenv')

const router = express.Router()
const userService = new UserService()

dotenv.config()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || ''
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL || ''
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '' 

//Configure Local Strategy
passport.use(new LocalStrategy(
    {usernameField: 'email',
    passwordField: 'password'},
    async function (email,password, done) {
        try{
            const user = await userService.getUserByEmail(email)
            if(!user) return done(null, false, {message: "Incorrect Email"})
            if(!compareSync(password,user.password)) return done(null, false,{message: "Incorrect Password"})
            return done(null,user)        
        }catch(error){
            logger.error(error)
        }
    }
))

//Configure Google Strategy
passport.use(new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL,
        scope: ['profile','email']
    },
    async function(accessToken,refreshToken,profile,done) {
        try{
            const user = await userService.getUserByEmail(profile.emails[0].value)
            if(!user){

                let newUser = {
                    name: profile.name.givenName,
                    email: profile.emails[0].value
                }
                userService.createNewUser(newUser)
            }else
            {
                return done(null,user)
            }
        }catch(error){
            console.error(error)
        }
    }
))

//Passport Session Setup
passport.serializeUser(function(user,done){
    done(null, user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})

router.post('/signup', async (req,res) => {
    const existingUser = await userService.getUserByEmail(req.body.email)
    if(existingUser){
        res.status(409).send('User already exists')
    }
    else{
        const user = {
            name: req.body.name,
            password: hashSync(req.body.password, 10),
            email: req.body.email
        }
        userService.createNewUser(user)
        // sendVerificationEmail(user,generatedToken)
        console.log('Registering User')
        res.status(201).send('Please check your email for verification.')
    }
})

//Routes for Local Authentication
router.post("/login", passport.authenticate("local",{successRedirect: "http://localhost:3001/auth/success"}))

//Routes for Google Authentication
router.get('/google', passport.authenticate("google"))

router.get('/google/redirect', passport.authenticate("google", 
        {
            failureRedirect: "/",
            successRedirect: "/success"
        }
    )
)

// async function verificationEmailCheck(req,res,next){
//     try{
//     const user = req.user
//     const existingUserToken = await tokens.findOne({ userId: user.id})
//     if(user && !user.isEmailVerified){
//         if(existingUserToken  && existingUserToken.token){
//             const currentTime = Date.now()
//             const formattedExpireDate = existingUserToken.expiresAt
//             const expiredDate = new Date(formattedExpireDate)

//             if(currentTime > expiredDate.getTime()){
//                 const newToken = generateToken()
//                 const { formattedCurrentDay, formattedNextDay } = getFormattedDates()
//                 // await tokens.updateOne({userId: user.id},{token: newToken, createdAt:formattedCurrentDay, expiresAt: formattedNextDay})
//                 logger.info('User Token has expired')
//                 sendVerificationEmail(user, newToken)
//                 res.send('Token has expired. New verification email has been sent')
//             }else{
//                 res.status(401).send('Check your email and please click on the verification link to login')
//             }
//         }
//     }
//     else{
//        if(user?.isEmailVerified) next()
//     }
//     }catch(error){
//         logger.error(error)
//     }
// }

//Route for if login was succesful
router.get("/success", (req,res) =>{
    res.status(200).redirect('http://localhost:3000/')
})

router.get('/failure', (req,res) =>{
    res.status(403).redirect('http://localhost:3000/')
})

router.post('/logout', (req,res) =>{
    logger.info('Logging out user')
    req.logout(() => {
        res.redirect(config.DOMAIN)
        }
    );
})

router.get('/logout',(req,res)=> {
    req.logout(() =>{
        console.log(req.session)
        res.redirect('http://localhost:3001/auth/login')
    })
})

router.get('/verify', async (req, res) => {
    const  { userToken, userId } = req.query;
    logger.info(userId)
    logger.info(userToken)
    const user = await users.findOne({ id: userId})
    const token = await tokens.findOne({ userId: user.id})
    if (user) {
      // Mark the user as verified (update your database accordingly)
      if(token && token.token === userToken){
        await users.updateOne({id: userId},{isEmailVerified: true})
        return res.send('Email verification successful. You can now log in.');
      }
    }
    return res.status(400).send('Invalid verification token.');
}); 

async function sendVerificationEmail(newUser, token){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'theshopcartapp@gmail.com',
            pass: 'dqyg fdka ladm aglx'
            
        }
    })

    const mailOptions = {
        from: 'smtp.gmail.com',
        to: newUser.email,
        subject: 'Email Verification',
        html:`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Concert+One">
            <style>
        
                body{
                    width: 100vh;
                    background-color: #f6f9fc;
                    height: 100vh;
                }
        
                .email-container{
                    flex: 1 1 auto;
                    flex-direction: column; 
                    width: 600px;
                    height: auto;
                    margin: 0 auto;
                    position: relative;
                }
        
                .email-section{
                    background-color: #fff;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top: 30px;
                    padding-bottom: 30px;
                    border-radius: 10px;
                }
        
                .img{
                    height: 50px;
                    margin-bottom: 20px;
                }
        
                .verify-link-btn{
                    border-radius: 10px;
                    flex: 1 1 auto;
                    height: 40px;
                    width: 150px;
                    margin-bottom: 10px;
                    background-color: #08ac0a;
                    border: none;
                }
        
                .email-txt, .email-txt-2{
                    font-family: "Ubuntu", sans-serif;
                    font-size: 16px;
                    margin-bottom: 20px;
                    color: #808080;
                }
        
                .email-txt-2{
                    margin-top: 20px;
                }
        
                .verify-txt{
                    font-family: "Ubuntu", sans-serif;
                    font-size: 18px;
                    margin-left: 0px;
                    margin-right: 0px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    font-weight: 600;
                    color: #fff;
                }
        
            </style>
        </head>
        <body>
            <div class="[ email-container ]">
                <div class="[ email-section ]">
                    <img class="[ img ]" src="https://i.imgur.com/J7ZurrZ.png" />
                    <p class="[ email-txt ][ flex-wrap ]">
                        Thank you for creating a Shopcart account! We're thrilled to have you on board. To kickstart your shopping experience, we kindly ask you to verify your email address.
                    </p>
                    <a href ="http://localhost:3001/auth/verify?userId=${newUser.id}&userToken=${token}" ><button class="[ verify-link-btn ]"><p class="[ verify-txt ][ my-auto mx-auto ][ text-[#fff] font-semibold ]">Verify Email</p></button></a>
                    <p class="[ email-txt-2 ][ flex-wrap ]" >Once you have verified your email, we'll guide through the process of completing your account. Visit our support site if you have questions or need help.</p>
                </div>
            </div>
        </body>
        </html>`
    }

    transporter.sendMail(mailOptions, (error,info) =>{
        if(error) return logger.error(error)
        logger.info('Email sent: '+ info.response)
    })
}

// function getFormattedDates(){
//     const currentTimestamp = Date.now()
//     const currentDay = new Date(currentTimestamp)
//     const nextDay = new Date(currentTimestamp)
//     nextDay.setDate(currentDay.getDate() + 1);

//     const formattedCurrentDay = new Intl.DateTimeFormat('en-US', options).format(currentDay)
//     const formattedNextDay = new Intl.DateTimeFormat('en-US', options).format(nextDay)
//     return { formattedCurrentDay, formattedNextDay }
// }

// function generateToken(){
//     const date = Date.now()
//     const randomLetters  = generateRandomLetters()
//     const token = randomLetters+""+date
//     return token
// }

function generateRandomLetters(){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let randomLetters = ''
    for(let i = 0; i < 3; i++){
        const randomIndex = Math.floor(Math.random() * alphabet.length)
        randomLetters += alphabet[randomIndex]
    }
    return randomLetters
}

 
module.exports = router