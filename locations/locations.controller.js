// This file is used to map API calls (Presentation Layer) with the
// Business-Logic layer

const router = require('express').Router()
const locationsService = require('./locations.service')
const passport = require('passport')

router.get('/Hello-World', (req, res) => {
	return res.status(200).send("Hello World")
})

router.use("/locations",passport.authenticate('jwt',{session:false}))
router.use('/locations/:id', passport.authenticate('jwt', { session: false }));

router.route("/locations")
	.get(async(req,res)=>getAllLoc(req,res))
	.post(async(req,res)=>createLoc(req,res))

router.route("/locations/:id")
	.get(async (req, res) => getLocById(req,res))
	.put(async(req,res)=>updateLoc(req,res))
	.delete(async(req,res)=>deleteLoc(req,res))

module.exports = router


//functions

async function getAllLoc(req,res){
	try{
		const loc = await locationsService.getAllLoc()
		return res.status(200).send({locactions : loc})
	}
	catch(err){
		return res.status(500).send(err.message)
	}
}

async function createLoc(req,res){
	try{
		const loc = await locationsService.createLoc(req.body)
		return res.status(200).send({locactions : loc})
	}
	catch(err){
		return res.status(500).send(err.message)
	}
}

async function getLocById(req,res){
	try{
		const loc = await locationsService.getLocById(req.params.id)
		return res.status(200).send({locactions : loc})
	}
	catch(err){
		return res.status(500).send(err.message)
	}
}

async function updateLoc(req,res){
	try{
		const loc = await locationsService.updateLoc(req.params.id,req.body)
		return res.status(200).send({locactions : loc})
	}
	catch(err){
		return res.status(500).send(err.message)
	}
}

async function deleteLoc(req,res){
	try{
		const loc = await locationsService.deleteLoc(req.params.id)
		return res.status(200).send({locactions : loc})
	}
	catch(err){
		return res.status(500).send(err.message)
	}
}