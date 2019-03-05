'use strict';

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

const watchlist: string[] = [];
const allowed: string[] = [];
let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(objectList){
  for(let i: number = 0; i < objectList.length; i++){
    if(objectList[i].alcohol > 0){
      securityAlcoholLoot += objectList[i].alcohol;
      objectList[i].alcohol = 0;
    }
  }

  for(let i: number = 0; i < objectList.length; i++){
    if(objectList[i].guns > 0){
      watchlist.push(objectList[i].name);
    } else {
      allowed.push(objectList[i].name);
    }
  }
  console.log("No. of alcohol units: " + securityAlcoholLoot);
  console.log("On watchlist: " + watchlist);
  console.log("Allowed to enter: " + allowed);
}

securityCheck(queue);