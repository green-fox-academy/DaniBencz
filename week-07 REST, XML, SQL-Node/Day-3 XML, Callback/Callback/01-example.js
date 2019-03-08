'use strict';

const useCallback = (callback) => {
   callback('Chewing out a rhythm on my bubble gum');
   callback('The sun is out and I want some');
   callback('It\'s not hard, not far to reach, we can hitch a ride to Rockaway Beach');
};

const printSentence = (sentence) => {
  console.log(sentence);
};

useCallback(printSentence);