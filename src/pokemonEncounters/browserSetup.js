import { addPokemonToCaughtStorage } from "./caughtPokemonStorage.js";
import { getMultiplePokemon, getOnePokemon } from "./encounterSystem.js";


let encounterOneButton = document.getElementById("encounter-one");
let encounterSixButton = document.getElementById("encounter-six");

encounterOneButton.addEventListener('click', async () => {
	let result = await getOnePokemon();
	console.log(result);
	result = [result];
	localStorage.setItem("wildPokemon", JSON.stringify(result));

	updateScreen();
	// getOnePokemon().then(data => console.log(data));
})

encounterSixButton.addEventListener('click', async () => {
	let result = await getMultiplePokemon();
	console.log(result);
	localStorage.setItem("wildPokemon", JSON.stringify(result));

	updateScreen();
})

function renderWildEncounterData(){
	// Retrieve data from local storage
	let pokemonData = localStorage.getItem("wildPokemon");

	console.log(pokemonData);
	console.log(typeof(pokemonData));

	pokemonData = JSON.parse(pokemonData);

	// Reference to reuse
	let wildPokemonContainer = document.getElementById("pokemon-encounters");
	wildPokemonContainer.innerText = "";

	pokemonData.forEach(pokemon => {
		// Build HTML elements to display the data 
		let newElement = buildPokemonDisplayElement(pokemon);

		// Insert the new HTML elements into the current page 
		wildPokemonContainer.appendChild(newElement);
	});
	
}

function renderCaughtPokemonData(){
	// Retrieve data from local storage
	let pokemonData = localStorage.getItem("savedPokemon");

	console.log(pokemonData);
	console.log(typeof(pokemonData));

	pokemonData = JSON.parse(pokemonData);

	if (!pokemonData) return;

	// If item is falsey, it removes itself from the array
	pokemonData = pokemonData.filter(item => item);

	// Reference to reuse
	let caughtPokemonContainer = document.getElementById("pokemon-caught");
	caughtPokemonContainer.innerText = "";

	pokemonData.forEach(pokemon => {
		// Build HTML elements to display the data 
		let newElement = buildPokemonDisplayElement(pokemon, true);

		// Insert the new HTML elements into the current page 
		caughtPokemonContainer.appendChild(newElement);
	});
	
}

function buildPokemonDisplayElement(pokemonData, isCaught = false){
	if (!pokemonData){
		return;
	}

	let pokemonContainer = document.createElement("div");

	let pokemonHeading = document.createElement("h1");
	pokemonHeading.innerText = pokemonData.name;
	pokemonContainer.appendChild(pokemonHeading);

	let pokemonImage = document.createElement("img");
	pokemonImage.src = pokemonData.sprites.front_default;
	pokemonContainer.appendChild(pokemonImage);

	if (!isCaught){
		let captureButton = document.createElement("button");
		captureButton.addEventListener("click", () => {
			addPokemonToCaughtStorage(pokemonData);
			updateScreen();
		});
		captureButton.innerText = "Capture " + pokemonData.name;
		pokemonContainer.appendChild(captureButton);
	}
	

	return pokemonContainer;
}


function updateScreen(){
	renderWildEncounterData();
	renderCaughtPokemonData();
}