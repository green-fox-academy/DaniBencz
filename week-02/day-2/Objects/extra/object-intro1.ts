'use strict';

let object1: { [key: number]: string } = {
}

//Print out whether the map is empty or not
console.log(`the object is empty: ${Object.keys(object1).length === 0}`);

//Add key:value pairs
object1[97] = "a";
object1[98] = "b";
object1[99] = "c";
object1[65] = "A";
object1[66] = "B";
object1[67] = "C";


//Print all the values
//Need this to be able to run .values
//https://github.com/Microsoft/TypeScript/issues/28166
console.log(`all the values are: ${Object.values(object1)}`);

//Add value D with the key 68
object1[68] = "D";
console.log('added new key-value pair');

//Print how many key-value pairs are in the map
console.log(`there are ${Object.keys(object1).length} key-value pairs`);

//Print the value that is associated with key 99
console.log(`the value of key 99 is ${object1[99]}`);

//Remove the key-value pair where with key 97
delete object1[97];
console.log("key-value pair with key '97' is deleted")

//Print whether there is an associated value with key 100 or not
//(got to write key name in brackets)
console.log(`there is a key nemd 100: ${object1.hasOwnProperty(100)}`);

//Print all the keys
console.log(`all the keys are: ${Object.keys(object1)}`);

//Remove all the key-value pairs
object1 = {};
console.log('all key-value pairs are deleted');
console.log(object1);