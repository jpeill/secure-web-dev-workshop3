const express = require('express')
const locationController = require('./locations/locations.controller')
const usersController = require('./users/users.controller')
const app = express()
const port = 3000

const mongoose=require('mongoose');
require('dotenv').config('./.env')

async function main(){
	await mongoose.connect(process.env.MONGO_URI).then((success)=>console.log("connecté"))
	app.use(locationController)
	app.use(usersController)

	app.listen(port, () => {
		console.log(`API listening on port ${port}, visit http://localhost:${port}/`)
	})
}
main()