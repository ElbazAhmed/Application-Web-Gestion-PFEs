const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
var bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');

//models
const etudiant=require('./models/etudiant');

//bycrypt setting 
const salt=bcrypt.genSaltSync(10);

// middlwaire

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true,origin: '*'}));

//connect database

mongoose.connect('mongodb+srv://ilyas:ilyas@cluster0.51lsinj.mongodb.net/?retryWrites=true&w=majority').then(e=>console.log('database is connect')).catch(err=>console.log("not connect"))

//// midlwares

app.post('/registre',async (req,res)=>{
    const {nom,prenom,filier,email,password}=req.body
    try{
        let etudiantInfo=await etudiant.create({
            nom,
            prenom,
            filier,
            email,
            password:bcrypt.hashSync(password,salt),
        });
        res.json(etudiantInfo);
    }catch(e){
        res.status(400).json(e);
    }
    
})
app.get("/",(req,res)=>{
    res.json("dezdezde")
})

app.listen(4000)