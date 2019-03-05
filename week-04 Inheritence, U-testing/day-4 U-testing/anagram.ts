'use strict';

//are 2 strings anagrams?
export function anagram(s1: string, s2: string) {
  return s1.split('').sort().join() === s2.split('').sort().join();
}

