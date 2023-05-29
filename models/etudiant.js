const mongoose=require('mongoose');

const {Schema,model}=mongoose;

const etudiantSchema=new Schema({
    nom:{type:String,required:true, unique:true},
    prenom :{type:String ,required:true ,unique:true},
    filier:{type:String ,required:true},
    email:{type:String ,required:true},
    password:{type:String ,required:true},
})

const etudiant=model('etudiant',etudiantSchema);
module.exports=etudiant;