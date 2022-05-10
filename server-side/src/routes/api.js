const express =require('express');
const UsersController=require("../controllers/UsersController");
const SupplierController=require("../controllers/SupplierController")
const ExpenseTypeController=require("../controllers/ExpenseTypeController")
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const ExpenseListController = require("../controllers/ExpenseListController");
const CustomerController = require("../controllers/CustomerController");
const CategoryController = require("../controllers/CategoryController");
const BrandController = require("../controllers/BrandController");
const ProductController = require("../controllers/ProductController");
const PurchaseController = require("../controllers/PurchaseController");
const SellController = require("../controllers/SellController");

const router =express.Router();

router.post("/UserLogin",UsersController.UserLogin)


// User
router.post("/CreateUser",AuthVerifyMiddleware,UsersController.CreateUser)
router.post("/UpdateUser/:UserID",AuthVerifyMiddleware,UsersController.UpdateUser)
router.get("/ReadUser",AuthVerifyMiddleware,UsersController.ReadUser)
router.get("/DeleteUser/:UserID",AuthVerifyMiddleware,UsersController.DeleteUser)


//Supplier
router.post("/CreateSupplier",AuthVerifyMiddleware,SupplierController.CreateSupplier);
router.post("/UpdateSupplier/:SupplierID",AuthVerifyMiddleware,SupplierController.UpdateSupplier);
router.get("/DeleteSupplier/:SupplierID",AuthVerifyMiddleware,SupplierController.DeleteSupplier);
router.get("/ReadSupplier",AuthVerifyMiddleware,SupplierController.ReadSupplier);

// Expense Type
router.post("/CreateExpenseType",AuthVerifyMiddleware,ExpenseTypeController.CreateExpenseType);
router.post("/UpdateExpenseType/:TypeID",AuthVerifyMiddleware,ExpenseTypeController.UpdateExpenseType);
router.get("/DeleteExpenseType/:TypeID",AuthVerifyMiddleware,ExpenseTypeController.DeleteExpenseType);
router.get("/ReadExpenseType",AuthVerifyMiddleware,ExpenseTypeController.ReadExpenseType);


// Expense List
router.post("/CreateExpenseList",AuthVerifyMiddleware,ExpenseListController.CreateExpenseList);
router.post("/UpdateExpenseList/:ExpenseID",AuthVerifyMiddleware,ExpenseListController.UpdateExpenseList);
router.get("/DeleteExpenseList/:ExpenseID",AuthVerifyMiddleware,ExpenseListController.DeleteExpenseList);
router.get("/ReadExpenseList",AuthVerifyMiddleware,ExpenseListController.ReadExpenseList);


//Customer
router.post("/CreateCustomer",AuthVerifyMiddleware,CustomerController.CreateCustomer);
router.post("/UpdateCustomer/:CustomerID",AuthVerifyMiddleware,CustomerController.UpdateCustomer);
router.get("/DeleteCustomer/:CustomerID",AuthVerifyMiddleware,CustomerController.DeleteCustomer);
router.get("/ReadCustomer",AuthVerifyMiddleware,CustomerController.ReadCustomer);


//Categories
router.post("/CreateCategoryType",AuthVerifyMiddleware,CategoryController.CreateCategoryType);
router.post("/UpdateCategoryType/:CategoryID",AuthVerifyMiddleware,CategoryController.UpdateCategoryType);
router.get("/DeleteCategoryType/:CategoryID",AuthVerifyMiddleware,CategoryController.DeleteCategoryType);
router.get("/ReadCategoryType",AuthVerifyMiddleware,CategoryController.ReadCategoryType);



//Brands
router.post("/CreateBrandType",AuthVerifyMiddleware,BrandController.CreateBrandType);
router.post("/UpdateBrandType/:BrandID",AuthVerifyMiddleware,BrandController.UpdateBrandType);
router.get("/DeleteBrandType/:BrandID",AuthVerifyMiddleware,BrandController.DeleteBrandType);
router.get("/ReadBrandType",AuthVerifyMiddleware,BrandController.ReadBrandType);


// Product
router.get("/ReadProduct",AuthVerifyMiddleware,ProductController.ReadProduct);
router.get("/DeleteProduct/:ProductID",AuthVerifyMiddleware,ProductController.DeleteProduct);
router.post("/CreateProduct",AuthVerifyMiddleware,ProductController.CreateProduct);
router.post("/UpdateProduct/:ProductID",AuthVerifyMiddleware,ProductController.UpdateProduct);

//Purchase
router.post("/CreatePurchase",AuthVerifyMiddleware,PurchaseController.CreatePurchase);
router.get("/ReadPurchase",AuthVerifyMiddleware,PurchaseController.ReadPurchase);
router.get("/ReadPurchaseProducts/:PurchaseID",AuthVerifyMiddleware,PurchaseController.ReadPurchaseProducts);
router.get("/DeletePurchase/:PurchaseID",AuthVerifyMiddleware,PurchaseController.DeletePurchase);


//Sell
router.post("/CreateSell",AuthVerifyMiddleware,SellController.CreateSell);
router.get("/ReadSell",AuthVerifyMiddleware,SellController.ReadSell);
router.get("/ReadSellProducts/:SellID",AuthVerifyMiddleware,SellController.ReadSellProducts);
router.get("/DeleteSell/:SellID",AuthVerifyMiddleware,SellController.DeleteSell);


module.exports=router;