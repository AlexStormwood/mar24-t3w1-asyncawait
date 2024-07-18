// Make fetch requests to a URL like:
// https://pokeapi.co/api/v2/pokemon/25
// https://pokeapi.co/api/v2/pokemon/${randomNumber}

// Random number generator function 
function randomPokemonId(){
	return Math.floor(Math.random() * 1025) + 1;
}

// Fetch one Pokemon function 
// function fetchOnePokemon(){
// 	// fetch().then(return data);
// }

async function getOnePokemon(){
	let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId()}`);
	let data = await response.json();

	// fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId()}`).then(response => {
	// 	return response.json();
	// })

	// console.log(data);

	return data;
}

// Fetch multiple Pokemon function 
async function getMultiplePokemon(){
	let multiplePokemon = await Promise.all([
		getOnePokemon(),
		getOnePokemon(),
		getOnePokemon(),
		getOnePokemon(),
		getOnePokemon(),
		getOnePokemon()
	]);

	// console.log(multiplePokemon);
	return multiplePokemon;
}


// Export syntax is for the Browser
export { randomPokemonId, getOnePokemon, getMultiplePokemon }

// Module.exports is for NodeJS, not the Browser 
// module.exports = {
// 	randomPokemonId, getOnePokemon, getMultiplePokemon
// }