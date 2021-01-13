const cowsay = require("cowsay")
const myInformation = require("./information.js")

console.log(cowsay.say({
	text : myInformation(),
	e : "oO",
	T : "U ",
}));