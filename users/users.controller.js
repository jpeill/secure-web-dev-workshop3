const router = require('express').Router()
const locationsService = require('./users.service')

router.post("/users/register")
router.post("/users/login")
router.get("/users/me")
router.get("/users")