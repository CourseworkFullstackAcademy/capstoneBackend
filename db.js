//This is where we have the connectin to the database. We will use this pool to make our queries
//need to import it in the controller.js file
const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "capstone",
	password: "H@mmi3",
	port: 5432,
});

module.exports = pool;