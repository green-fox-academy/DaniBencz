'use strict';

//if the <script> is in the head of html
document.addEventListener['DOMContentLoaded', function () {
  let div = document.querySelector('.giphs');
  let http = new XMLHttpRequest();

  //one way to delete the element in a list by clicking it
  let elementList = document.querySelectorAll('element-list');
  elementList.forEach(element => {
    element.addEventListener('click', function (e) {
      const child = e.target.parentElement;
      //or child.parentElement
      child.parentNode.removeChild(child);
    });
  });

  //a better way, using bubbling
  const parent = document.querySelector('parent-elemen');
  parent.addEventListener('click', function (e) {
    //specifying the scope of the click event
    if (e.target.className === 'ourClass') {
      const child2 = e.target.parentElement;
      //remove its parents' child (that is, itself)
      child2.parentNode.removeChild(child2);
      //or same thing
      parent.removeChild(child2);
    }
  });

  //preventing a link to navigate to new site
  link.addEventListener('click', prevent);
  //like this, it can be called elsewhere again
  let prevent = (e) => {
    e.preventDefault();
  };

  //adding an <input> line to a form
  const addForm = document.forms['myClass'];
  addForm.addEventListener('submit', function (e) {
    //preventing page to refresh on submitting
    e.preventDefault();
    //grabbing the value of the user input
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
  });

  //serving checkbox
  const checkbox = document.querySelector('#myBox');
  checkbox.addEventListener('change', function (e) {
    if (checkbox.checked) {
      console.log('checked');
    }
  });
}];