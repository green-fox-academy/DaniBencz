let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open('GET', 'https://api.giphy.com/v1/stickers/search?q=spaceship&api_key=udaeAkvhx5NCotUJ70BCWc2khKVVZx5T&limit=16', true);
httpRequest.send(null);

httpRequest.onload = () =>{
  let data = JSON.parse(httpRequest.responseText);
  console.log(data);
  
}