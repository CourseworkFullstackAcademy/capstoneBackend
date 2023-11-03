const { Router } = require("express");
const controller = require('./controller');
const router = Router();

// Get All Products
//Instead of putting the callback function below, we can use our controller function, getStudents()
// router.get("/", (req, res) => {
// 	res.send('USING API ROUTE, routes.js, in capstone folder');
// });

//We can shorten the one below, we do not need the calback because express knows. UPDATE: I had getStudents instead of getProducts. It works now. BUT!!!! That did not work. An error cam eup that req ws not defined when I did not pass it in. So, I added it back in
//router.get("/", () => controller.getProducts(req, res));
router.get("/", controller.getProducts);
//router.get("/", (req, res) => controller.getProducts(req, res));

//Get 1 product by ID
//router.get("/:id", (req,res) => controller.getProductById(req,res));
router.get("/:id", controller.getProductById);

//Post a product, Add a product
//router.post("/", (req,res) => controller.addProduct(req,res));
router.post("/",controller.addProduct);


//DELETE a product
router.delete("/:id", controller.deleteProduct);

module.exports = router;




