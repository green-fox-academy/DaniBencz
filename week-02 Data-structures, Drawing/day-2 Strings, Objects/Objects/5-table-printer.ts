'use strict';

// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

function printIngr(myArray) {

	//finds longest name value
	let nameLength: number = 0;
	for (let i: number = 0; i < myArray.length; i++) {
		if (myArray[i].name.length > nameLength) {
			nameLength = myArray[i].name.length + 1;
		}
	}

	//adds spaces after each name
	for (let i: number = 0; i < myArray.length; i++) {
		while (myArray[i].name.length < nameLength) {
			myArray[i].name = myArray[i].name + " ";
		}
	}

	//draws the horizontal lines
	let dashes: string = '---';
	for (let i: number = 0; i < myArray.length; i++) {
		while (dashes.length < nameLength) {
			dashes = dashes + "-";
		}
	}
	dashes = dashes + "+---------------+----------+";

	//adds spaces to 'Ingredient' label
	let ingredtient: string = "Ingredient"
	while (ingredtient.length < nameLength) {
		ingredtient = ingredtient + " ";
	}

	//--------------------------WE START DRAWING NOW----------------------------------

	console.log("+-" + dashes);
	console.log("| " + ingredtient + "| Needs cooling | In stock |");
	console.log("+-" + dashes);

	let cooling: string = "";
	for (let i: number = 0; i < myArray.length; i++) {
		if (myArray[i].needsCooling) {
			cooling = "Yes";
		} else {
			cooling = "No ";
		}
		console.log("| " + myArray[i].name + "| " + cooling +
			"           |" + myArray[i].inStock + "         |");
	}

	console.log("+-" + dashes);
}

const ingredients: any[] = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'bambi', inStock: 9, needsCooling: true},
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];

printIngr(ingredients);