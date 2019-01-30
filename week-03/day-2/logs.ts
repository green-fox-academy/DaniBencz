'use strict';
export { }

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

let fs = require('fs');

function IPlogs(logFile): string[] {

  try {
    let newArray: string[] = fs.readFileSync(logFile, 'utf-8').split('\n');
    let justIPs: string[] = [];
    for (let i: number = 0; i < newArray.length; i++) {
      justIPs.push(newArray[i].split('   ')[1]);
    }
    console.log(justIPs);
    return justIPs;
  } catch (e) {

  }
}

function IPratio(logFile) {

  try {
    let newArray: string[] = fs.readFileSync(logFile, 'utf-8').split('\n');
    let get: number = 0;
    let post: number = 0;

    for (let i: number = 0; i < newArray.length; i++) {
      //console.log(newArray[i].split('   ')[2].length);

      //try substring
      if (newArray[i].split('   ')[2] === 'GET /') {
        console.log(i);
        get++;
      }

      /* if (newArray[i].split('   ')[2] === 'POST /'){
        post++;
      } */
    }

    console.log(get);
    console.log(post);
    //console.log('GET/Post ratio is ' + get / post);

  } catch (e) {
  }
}

//IPlogs('logs.txt');
IPratio('logs.txt');