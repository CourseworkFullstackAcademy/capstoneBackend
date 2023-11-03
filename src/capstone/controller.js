//where we store business logic that is related to each route.
const pool = require("../../db");
const queries = require("./queries");

// create a get products function, using the pool to query the database

//query method has 2 parameters, the 1st is sql statement,

const getProducts = (req, res) => {
  pool.query(queries.getProducts, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//now, we code for what happens if there is not an error, 200 status is a successful query

//testing below before querying database above. IT WORKED
// const getProducts = (req, res) => {
// 	console.log('getting products')
// };

//Get Product by ID
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getProductById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//Add a product
const addProduct = (req, res) => {
  const { title, price, category, description, image, quantityInStock } =
    req.body;
  //check if product already exists
  pool.query(queries.checkTitleExists, [title], (error, results) => {
    if (results.rows.length) {
      res.send("Product Title already taken");
    }
    //add product to db
    pool.query(
      queries.addProduct,
      [title, price, category, description, image, quantityInStock],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Product added successfully.");
      }
    );
  });
};

//Delete a product
const deleteProduct = (req, res) => {
	const id = parseInt(req.params.id);
	//check if product id exists
	pool.query(queries.getProductById, [id], (error, results) => {
		const noProductFound = !results.rows.length;
		if(noProductFound) {
			res.send("Product does not exist in database, cannot remove.");
		} 
		//delete product
		pool.query(queries.deleteProduct, [id], (error, deleteResults) => {
			if (error) {
			  // Handle the error and send an error response
			  console.error("Error while deleting product:", error);
			  return res.status(500).send("An error occurred while deleting the product.");
			}
	  
			// Product successfully deleted
			res.status(200).send("Product successfully deleted");
		  });
		});
	  };

    //Update a product

//export as an object because there will be multiple of these functions
module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct
};
