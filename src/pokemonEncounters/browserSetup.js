import { getMultiplePokemon, getOnePokemon } from "./encounterSystem.js";


let encounterOneButton = document.getElementById("encounter-one");
let encounterSixButton = document.getElementById("encounter-six");

encounterOneButton.addEventListener('click', async () => {
	let result = await getOnePokemon();
	console.log(result);
})

encounterSixButton.addEventListener('click', async () => {
	let result = await getMultiplePokemon();
	console.log(result);
})