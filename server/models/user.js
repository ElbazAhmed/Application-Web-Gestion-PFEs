const mongoose=require('mongoose');

const {Schema,model}=mongoose;

const userSchema=new Schema({
    nom:{type:String},
    prenom :{type:String},
    filier:{type:String},
    specialite:{type:String},
    email:{type:String},
    password:{type:String},
    role:{type:String},
})

const user=model('user',userSchema);
module.exports=user;