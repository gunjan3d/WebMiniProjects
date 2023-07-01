// var generateName = require('sillyname');
import generateName from "sillyname"
import superheroe from "superheroes";
// import superheroes from "superheroes"
var sillyName = generateName();

var Hero = superheroe.random();;

console.log(sillyName);
console.log(Hero);