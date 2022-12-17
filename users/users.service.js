const User = require('./users.model')
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function createUser(user){
	return await User.create(user)
}
module.exports.createUser = createUser

async function getAllUser(){
	return (await User.find())
}
module.exports.getAllUser = getAllUser

async function getUserById(id){
	return (await User.findById(id))
}
module.exports.getUserById = getUserById

async function updateUser(id,update){
    return await User.findByIdAndUpdate(id,update)
}
module.exports.updateUser = updateUser

async function deleteUser(id){
	return await User.findByIdAndDelete(id)
}
module.exports.deleteUser = deleteUser


async function register(user){
    const testExist = await User.find({ username: user.username });
    if (testExist) {
        throw new Error('User already exists')
    } 
    const hashedPassword = await bcrypt.hash(user.password, saltRounds)

    return await User.create({username:user.username, password:hashedPassword});
}
module.exports.register = register