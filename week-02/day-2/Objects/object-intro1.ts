'use strict';

let object1: { [key: number]: string } = {
}

//Print out whether the map is empty or not
//console.log(Object.keys(object1).length === 0);

//Add key:value pairs
object1["97"] = "a";
object1["98"] = "b";
object1["99"] = "c";
object1["65"] = "A";
object1["66"] = "B";
object1["67"] = "C";


//------------Print all the values(error)
//console.log(Object.values(object1));

//Add value D with the key 68
//object1["68"] = "D";

//Print how many key-value pairs are in the map
//console.log(Object.keys(object1).length);

//Print the value that is associated with key 99
//console.log(object1[99]);

//Remove the key-value pair where with key 97
delete object1[97];

//Print whether there is an associated value with key 100 or not
//----------------object1.hasOwnProperty();

//Print all the keys
console.log(Object.keys(object1));

//Remove all the key-value pairs
object1 = {};
console.log(object1);