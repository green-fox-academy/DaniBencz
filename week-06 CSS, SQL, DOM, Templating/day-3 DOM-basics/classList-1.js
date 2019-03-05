'use strict';


//If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
if (document.getElementsByTagName('p')[3].classList.contains('dolphin')) {
  for (var i = 0; i < document.querySelectorAll('.apple').length; i++) {
    document.querySelectorAll('.apple')[i].textContent = 'pear';
  }
}

//If the first p has an 'apple' class, replace cat's content with 'dog'
if (document.getElementsByTagName('p')[0].classList.contains('apple')) {
  for (var i = 0; i < document.querySelectorAll('.cat').length; i++) {
    document.querySelectorAll('.cat')[i].textContent = 'dog';
  }
}

//Make apple red by adding a .red class
document.querySelector('.apple').classList.add('red');

//Make balloon less balloon-like (change its shape)
document.querySelector('.balloon').style.borderRadius='10%';