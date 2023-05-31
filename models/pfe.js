const mongoose=require('mongoose');

const {Schema,model}=mongoose;

const pfeSchema=new Schema({
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
})

const pfe=model('pfe',pfeSchema);
module.exports=pfe;