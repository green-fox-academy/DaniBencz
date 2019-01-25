'use strict';
export{}

const students: any[] = [
    {name: 'Theodor', age: 3, candies: 2},
    {name: 'Paul', age: 9.5, candies: 2},
    {name: 'Mark', age: 12, candies: 5},
    {name: 'Peter', age: 7, candies: 3},
    {name: 'Olaf', age: 12, candies: 7},
    {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

function candieCounter(a: any[]){
    let candies :number = 0;
    a.forEach(function(pupil){
        candies += pupil.candies;
    })
    console.log(candies);
}

candieCounter(students);

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function ageOf(a: any[]){
    let years :number = 0;
    a.forEach(function(pupil){
        if(pupil.candies < 5){
            years += pupil.age;
        }
    })
    console.log(years);
}

ageOf(students);