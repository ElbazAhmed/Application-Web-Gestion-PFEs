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
app.use(cors({credentials:true,origin: 'http://localhost:3000'}));

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

app.post('/login',async (req,res)=>{
    const {email,password}=req.body
    const userInfo=await etudiant.findOne({email:email});
    const passOK=bcrypt.compareSync(password,userInfo.password);
    if(passOK){
        const {_id,nom,prenom,filier,email}=userInfo
        jwt.sign({id:_id,nom,prenom,filier,email},"LFKJEN5dzjdnKDNZLJ526dd",(err,token)=>{
            if (err) throw err;

            res.cookie('token',token).json(
                {id:_id,nom,prenom,filier,email}
            )
        })
    }else{
        res.status(400).json("wrong")
    }
})


app.get("/",(req,res)=>{
    const {token}=req.cookies;
    console.log(token);
    res.end()
})

app.listen(4000)