'use strict';
export{}

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function gotMore(a: any[]){
    let whoHas :any = [];
    a.forEach(function(pupils) {
        if(pupils.candies > 4){
            whoHas.push(pupils.name);
        }
    });
    console.log(whoHas);
}

gotMore(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average
  
function average(a: any[]):number{
    let aver :number = 0;
    a.forEach(function(pupils){
        aver += pupils.candies;
    })
    console.log(aver/a.length);
    return aver;
}

average(students);