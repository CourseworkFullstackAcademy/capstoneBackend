//where we store all of our sql queries against the database
const getProducts = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE id = $1";
//Below is a query to see if the title has already been used to try to make sure multiple of the same product are not added in POST requests
const checkTitleExists =  "SELECT s FROM products s WHERE s.title = $1";
const addProduct = "INSERT into products (title, price, category, description, image, quantityInStock) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteProduct = "DELETE FROM products WHERE id = $1";

module.exports = {
	getProducts,
	getProductById,
	checkTitleExists,
	addProduct,
	deleteProduct
}