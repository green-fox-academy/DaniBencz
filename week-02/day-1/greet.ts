'use strict'
export{}

let name :string = "GreenFox";

function greet(a) :string {
    return "Greetings, dear " + a;
}

console.log(greet(name));

// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`