const mongoose=require('mongoose');

const {Schema,model}=mongoose;

const PFEsSchema=new Schema({
    titre:{type:String},
    domainEtude :{type:String},
    problematique:{type:String},
    entreprise:{type:String },
    description:{type:String},
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'etudiant',
        required:true
    },
    encadrent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'etudiant',
        default:null
    },
    valider:{type: Boolean,default: true},
    encadrer:{type: Boolean,default: false},
})

const PFEs=model('PFEs',PFEsSchema);
module.exports=PFEs;