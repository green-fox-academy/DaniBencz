'use strict';
export{}

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

function appendA(input: string[]): string[]{
    input.forEach(function(element, index) {
        input[index] = element + "a";
    });
    return input;
}

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

export = appendA;