'use strict';

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

let myArray :string[] = ["My todo\n", " - Download games\n", "    - Diablo\n"];
myArray.splice(1, 0, todoText);
todoText = myArray.join("");

console.log(todoText);