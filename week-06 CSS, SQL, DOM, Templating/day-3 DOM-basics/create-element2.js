'use strict';

//Remove the king from the list.
var toDelete = document.querySelector('li');
if (toDelete.textContent === 'The King') {
  document.querySelector('.asteroids').removeChild(toDelete);
}

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

//Fill the list based on the following list of objects.
//Only add the asteroids to the list.
//Each list item should have its category as a class and its content as text content.

function adder(category, content) {
  var newItem = document.createElement('li');
  newItem.className = category;
  newItem.textContent = content;
  return newItem;
}

var parent = document.querySelector('.asteroids');

for (var i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid) {
    parent.appendChild(adder(planetData[i].category, planetData[i].content));
  }
}
