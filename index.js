const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
var bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');

//models
const etudiant=require('./models/etudiant');
const PFEs=require('./models/PFEs');
const user=require('./models/user');
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
    const {nom,prenom,filier,specialite,email,password,role}=req.body
    try{
        let userInfo=await user.create({
            nom,
            prenom,
            filier,
            specialite,
            email,
            password:bcrypt.hashSync(password,salt),
            role,
        });
        res.json(userInfo);
    }catch(e){
        res.status(400).json(e);
    }
    
})

app.post('/login',async (req,res)=>{
    const {email,password}=req.body
    const userInfo=await user.findOne({email:email});
    if(userInfo==null){
        res.status(400).json('user not found')
    }
    const passOK=bcrypt.compareSync(password,userInfo.password);
    if(passOK){
        jwt.sign({id:userInfo._id,nom:userInfo.nom,prenom:userInfo.prenom,filier:userInfo.filier,specialite:userInfo.specialite,role:userInfo.role},"LFKJEN5dzjdnKDNZLJ526dd",(err,token)=>{
            if (err) throw err;

            res.cookie('token',token).json({id:userInfo._id,nom:userInfo.nom,prenom:userInfo.prenom,filier:userInfo.filier,specialite:userInfo.specialite,role:userInfo.role})
        })
    }else{
        res.status(401).json("wrong")
    }
})


app.post("/addpfe",async (req,res)=>{
    
    const {token}=req.cookies;
    console.log(token);
    
    const {titre,domainEtude,problematique,entreprise,description,idAuthor}=req.body

        const pfeDocument=await PFEs.create({
            titre,
            domainEtude,
            problematique,
            entreprise,
            description,
            author:idAuthor,
        })
        res.status(200).json(pfeDocument)  
})

app.get('/listePfeNonValider',async (req,res)=>{
    res.json(await PFEs.find({valider:false}).populate('author'))
})

app.get('/listePfeValider',async (req,res)=>{
    res.json(await PFEs.find({valider:true,encadrer:false}).populate('author'))
})

app.put('/valider',async (req,res)=>{
    const {id}=req.body
    console.log(id);
    const {token}=req.cookies
    const pfeDoc=await PFEs.findById(id)
    await pfeDoc.updateOne({valider:true})
    res.status(200).json(pfeDoc)
})

app.put('/encadrer',async (req,res)=>{
    const {id}=req.body
    const {token}=req.cookies
    const pfeDoc=await PFEs.findById(id)
    await pfeDoc.updateOne({encadrer:true})
    res.status(200).json(pfeDoc)
})


app.listen(4000)