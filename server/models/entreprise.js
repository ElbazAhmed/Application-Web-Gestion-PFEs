const mongoose=require('mongoose');

const {Schema,model}=mongoose;

const entrepriseSchema=new Schema({
    nom:{type:String}, //Raison soaciale
    secteur :{type:String},
    Representant:{type:String},
    emailRep:{type:String},
    numeroRep:{type:String},
    Localisation:{type:String},
    email:{type:String},
    numero:{type:String},
})

const entreprise=model('entreprise',entrepriseSchema);
module.exports=entreprise;