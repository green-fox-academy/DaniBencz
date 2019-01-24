'use strict';
export { }

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(aNumber: number): any[] {

    let result: any[] = [];
    for (let i: number = 0; i < accounts.length; i++) {
        if (accounts[i].accountNumber === aNumber) {
            result.push(accounts[i].clientName);
            result.push(accounts[i].balance);
        }
    }
    console.log(result);
    return result;
}

//getNameAndBalance(11234543);

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

let ID1: number = NaN;
function findFrom(myObject, from) {
    for (let i: number = 0; i < myObject.length; i++) {
        if (myObject[i].accountNumber === from) {
            ID1 = i;
        }
    }
    return ID1;
}

let ID2: number = NaN;
function findTo(myObject, to) {
    for (let i: number = 0; i < myObject.length; i++) {
        if (myObject[i].accountNumber === to) {
            ID2 = i;
        }
    }
    return ID2;
}

function transferAmount(myObject, from, to, amount) {
    findFrom(myObject, from);
    findTo(myObject, to);
    //isNan(a:number) = false, !isNan(a:number) = true
    if (!isNaN(ID1) && !isNaN(ID2)) {
        myObject[ID1].balance = myObject[ID1].balance - amount;
        myObject[ID2].balance = myObject[ID2].balance + amount;
        console.log(accounts);
    } else {
        console.log("404 - account not found");
    }
}

transferAmount(accounts, 43546731, 23456311, 500.0);

//After printing the "accounts" it should look like:
  // const accounts = [
  //	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  //	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
  //	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
  //]
