const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    CategoryID:{type:Number},
    BrandID:{type:Number},
    ProductID:{type:Number,default:function(){return Math.floor(Date.now() / 1000)}},
    Name:{type:String},
    Price:{type:String},
    Unit:{type:String},
    Details:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const CategoryModel=mongoose.model('categories',DataSchema);
module.exports=CategoryModel