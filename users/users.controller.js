const router = require('express').Router()
const usersService = require('./users.service')
module.exports = router

router.post('/users/register', async (req, res) => {
    const user = await usersService.register(req.body);
    if (user == null)
        return res.status(418).send({err: "User already exists."});
    else
        return res.status(201).send({user: user.username});
})
router.post("/users/login")
router.get("/users/me")
router.get("/users", async(req,res)=>usersService.getAllUser())
