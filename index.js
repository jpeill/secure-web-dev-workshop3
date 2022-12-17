const express = require('express')
const locationController = require('./locations/locations.controller')
const userController = require('./users/users.controller')
const app = express()
const port = 3000

const mongoose=require('mongoose');
require('dotenv').config('./.env')

async function main(){
	await mongoose.connect(process.env.MONGO_URI).then((success)=>console.log("connecté"))
	app.use(locationController)

	app.listen(port, () => {
		console.log(`API listening on port ${port}, visit http://localhost:${port}/`)
	})
}
main()