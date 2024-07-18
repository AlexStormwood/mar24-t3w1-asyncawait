// Import functions
// import { getOnePokemon } from "./pokemonEncounters/encounterSystem";
const {getOnePokemon, getMultiplePokemon} = require("./pokemonEncounters/encounterSystem.js");

// and run the functions 
// getOnePokemon();
// getMultiplePokemon();

async function doStuff(){
	let data = await getMultiplePokemon();

	console.log(data);
}

doStuff();

