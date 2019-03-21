'use strict';

let score = 0;

element.addEventListener('submit', (sendEvent) => {

  let http = new XMLHttpRequest();
  http.open('POST', 'http://localhost:3000/', true);
  //http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify({ "key1": element1.value, "key2": element2.value }));
  console.log('submitted');

  http.onload = (loadEvent) => {
    let data = JSON.parse(http.responseText);
    const status = loadEvent.target.status || 0;
    if (status === 200) {
     //do this
    } else if (status === 400) {
      //or this
    } else {
      console.log('No response from the server');
    }
  }
});