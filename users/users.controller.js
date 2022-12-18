const router = require('express').Router()
const usersService = require('./users.service')
const passport = require('passport')


router.use('/users/me',passport.authenticate('jwt', {session:false}));

router.post('/users/register', async (req, res) => register(req,res))
router.post('/users/login')
router.get('/users/me', passport.authenticate('jwt',{session:false}), async (req, res) => getUserById(req, res))
router.put('/users/me', passport.authenticate('jwt',{session:false}), async (req, res) => updateUser(req, res))
router.delete('/users/me', passport.authenticate('jwt',{session:false}), async (req, res) => deleteUser(req, res))
router.get("/users", async(req,res)=>getAllUser(req,res))

module.exports = router
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
		const user = await usersService.getAllUser()
		return res.status(200).send({users : user})
	}
	catch(err){
		return res.status(500).send(err.message)
	}
}
async function getUserById(req,res){
	try{
		const user = await usersService.getUserById(req.user._id)
		return res.status(200).send({users : user})
	}
	catch(err){
		return res.status(500).send(err.message)
	}
}

async function updateUser(req,res){
	try{
		const user = await usersService.updateUser(req.user._id,req.body)
		return res.status(200).send({users : user})
	}
	catch(err){
		return res.status(500).send(err.message)
	}
}
async function deleteUser(req,res){
	try{
		const user = await usersService.deleteUser(req.user._id)
		return res.status(200).send({users : user})
	}
	catch(err){
		return res.status(500).send(err.message)
	}
}