'use strict';

let books: { [key: string]: string } = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab',
}
console.log(books);

//Print all the key-value pairs in the following format
//A Letter to Jo (ISBN: 978-1-60309-452-8)

for (let i: number = 0; i < Object.keys(books).length; i++) {
  console.log(`${Object.values(books)[i]} (ISBN: ${Object.keys(books)[i]})`);
}

//Remove the key-value pair with key 978-1-60309-444-3
delete books['978-1-60309-444-3'];
console.log(books);

//Remove the key-value pair with value The Lab

//Add the following key-value pairs to the map

/* Key	Value
978-1-60309-450-4	They Called Us Enemy
978-1-60309-453-5	Why Did We Trust Him? */

//Print whether there is an associated value with key 478-0-61159-424-8 or not

//Print the value associated with key 978-1-60309-453-5