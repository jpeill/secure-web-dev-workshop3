const router = require('express').Router()
const usersService = require('./users.service')
module.exports = router
const passport = require('passport')


router.use('/users/me',passport.authenticate('jwt', {session:false}));

router.post('/users/register', async (req, res) => register(req,res))
router.post("/users/login")
router.get("/users/me")
router.get("/users", async(req,res)=>getAllUser(req,res))


//functions

async function register(req,res){
    try{
        const user = await usersService.register(req.body)
		return res.status(200).send({users : user})
    }
    catch(err){
        return res.status(500).send(err.message)
    }
}

async function getAllUser(req,res){
	try{
		const loc = await usersService.getAllUser()
		return res.status(200).send({users : loc})
	}
	catch(err){
		return res.status(500).send(err.message)
	}
}
