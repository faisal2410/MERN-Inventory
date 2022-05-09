const PurchaseModel = require("../models/PurchaseModel");
const PurchaseProductModel = require("../models/PurchaseProductModel");

exports.CreatePurchase=(req,res)=>{

    let reqBody=req.body;

    PurchaseModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}