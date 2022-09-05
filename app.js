// Basic Lib Import
const express =require('express');
const path = require("path");
const router =require('./src/routes/api');
const app= new express();
const bodyParser =require('body-parser');

// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');
app.use(express.static('/home/bas/app_289ca492-5cbd-4dbe-b0f7-11fad009cf0d/client/build'));

// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));



// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

// Mongo DB Database Connection
let URI="mongodb://umqqdejfxaoh6afhykfq:pMZGHz50Jt9OdpkwNqlD@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bfhvwsq0c8kcumk?replicaSet=rs0";
mongoose.connect(URI,(error)=>{
    console.log("Connection Success")
    console.log(error)
})


// Routing Implement
app.use("/api/v1",router)


// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'/home/bas/app_289ca492-5cbd-4dbe-b0f7-11fad009cf0d/client','build','index.html'))
})


module.exports=app;
















