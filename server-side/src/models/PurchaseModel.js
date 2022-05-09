const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    SupplierID:{type:Number},
    PurchaseID:{type:Number,default:function(){return Math.floor(Date.now() / 1000)}},
    GrandTotal:{type:String},
    Note:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const PurchaseModel=mongoose.model('purchases',DataSchema);
module.exports=PurchaseModel