const User = require('./users.model')
const Useration = require('./users.model')
const saltRounds = 10;

async function createUser(User){
	return await Useration.create(User)
}
module.exports.createUser = createUser

async function getAllUser(){
	return (await Useration.find())
}
module.exports.getAllUser = getAllUser

async function getUserById(id){
	return (await Useration.findById(id))
}
module.exports.getUserById = getUserById

async function updateUser(id,update){
    return await Useration.findByIdAndUpdate(id,update)
}
module.exports.updateUser = updateUser

async function deleteUser(id){
	return await Useration.findByIdAndDelete(id)
}
module.exports.deleteUser = deleteUser


async function register(req,res){
    try{
        const user = res.body

        const testExist = await User.find({ username: user.username });
        if (testExist) {
            throw new NotFoundError('User already exists')
        }
        
        const hashedPassword = await bcrypt.hash(user.password, saltRounds)

        return await User.create({username:user.username, password:hashedPassword});
    }
    catch(err){
        return err
    }

    

}