


function addPokemonToCaughtStorage(newPokemon){
	// Retrieve latest data from local storage 
	let currentData = localStorage.getItem("savedPokemon");

	// Convert retrieved data to array of objects 
	currentData = JSON.parse(currentData);

	if (!Array.isArray(currentData)){
		currentData = [currentData];
		currentData = currentData.filter(item => item);
	}

	// Add object to array
	currentData.push(newPokemon);

	// Convert array to string 
	// Save string to localstorage
	localStorage.setItem("savedPokemon", JSON.stringify(currentData)); 
}

export { addPokemonToCaughtStorage }