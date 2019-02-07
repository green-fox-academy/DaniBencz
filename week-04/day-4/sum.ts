'use strict';

export class Sum {

  sum(myArray: number[]): number {

    return myArray.reduce((acc: number, cur: number) =>
      acc + cur, 0);
  }
}
