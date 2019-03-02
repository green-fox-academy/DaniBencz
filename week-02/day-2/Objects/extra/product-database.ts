'use strict';

/*We are going to represent our products in a map where the
keys are strings representing the product's name and the
values are numbers representing the product's price.*/

let products: { [key: string]: number } = {
  'Eggs': 200,
  'Milk': 200,
  'Fish': 400,
  'Apples': 150,
  'Bread': 50,
  'Chicken': 550,
}

//How much is the fish?
console.log(`the fish costs ${products['Fish']}`);

//What is the most expensive product?
//first find highest price
let highestPrice: number = 0;
Object.values(products).forEach(price => {
  if (price > highestPrice) {
    highestPrice = price;
  }
})
//find its key
function getKeyByValue(object: object, value: number): string {
  return Object.keys(object).find(key => object[key] === value);
}
console.log(`the most expensive product is ${getKeyByValue(products, highestPrice)}`);

//What is the average price?
let totalPrice: number = 0;
Object.values(products).forEach(price => {
  totalPrice += price;
})
console.log(`the average price is ${Math.floor(totalPrice / Object.values(products).length)}`);

//How many products' price is below 300?
let below300: number = 0;
Object.values(products).forEach(price => {
  if (price < 300) {
    below300++;
  }
})
console.log(`${below300} products' price is below 300`)

//Is there anything we can buy for exactly 125?
let exactly:boolean = false;
Object.values(products).forEach(price => {
  if (price === 125) {
    exactly = true;
  }
})
console.log(`we can buy something for exactly 125: ${exactly}`);

//What is the cheapest product?
let lowestPrice: number = 10000;
Object.values(products).forEach(price => {
  if (price < lowestPrice) {
    lowestPrice = price;
  }
})
console.log(`the cheepest product is ${getKeyByValue(products, lowestPrice)}`);

//Which products cost less than 201? (just the name)


//Which products cost more than 150? (name + price)

