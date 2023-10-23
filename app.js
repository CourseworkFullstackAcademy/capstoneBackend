const express = require('express');
const capstoneRoutes = require('./src/capstone/routes');
const app = express();
const port = 3001;

//allows us to post and get json from databse
app.use(express.json());

require('dotenv/config');
const api = process.env.API_URL;

// Get requests
// http://localhost:3001/api/v1
app.get(api+'/', (req, res) => {
	res.send(`${api}`)
});

//using routes from routes.js which uses the Router class from express module. Create the route that leads to the capstone routes
app.use(api+'/products', capstoneRoutes);



app.listen(port, () => {
	console.log(`server is running on port http://localhost:${port}`)
})
