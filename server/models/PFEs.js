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
        ref:'user',
        required:true
    },
    encadrent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        default:null
    },
    inscrire:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        default:null,
    },
    inscrie:{type: Boolean,default: false},
    valider:{type: Boolean,default: false},
    encadrer:{type: Boolean,default: false},
})

const PFEs=model('PFEs',PFEsSchema);
module.exports=PFEs;