// This file holds the Business-Logic layer, interacting with Data Layer

const Location = require('./locations.model')


async function createLoc(loc){
	return await Location.create(loc)
}
module.exports.createLoc = createLoc

async function getAllLoc(){
	return (await Location.find())
}
module.exports.getAllLoc = getAllLoc

async function getLocById(id){
	return (await Location.findById(id))
}
module.exports.getLocById = getLocById

async function updateLoc(id,update){
	return await Location.findByIdAndUpdate(id,update)
}
module.exports.updateLoc = updateLoc

async function deleteLoc(id){
	return await Location.findByIdAndDelete(id)
}
module.exports.deleteLoc = deleteLoc

