//Solution for challenge at
//https://www.codingame.com/ide/puzzle/power-of-thor-episode-1

var NowX = initialTX;
var NowY = initialTY;
while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

  if (lightY < NowY && lightX === NowX) {
    NowY--;
    print('N');
  }

  if (lightY < NowY && lightX > NowX) {
    NowX++;
    NowY--;
    print('NE');
  }

  if (lightX > NowX && lightY === NowY) {
    NowX++;
    print('E');
  }
  
  if (lightY > NowY && lightX === NowX) {
    NowY++;
    print('S');
  }

  if (lightX > NowX && lightY > NowY) {
    NowX++;
    NowY++;
    print('SE');
  }

  if (lightY > NowY && lightX < NowX) {
    NowX--;
    NowY++;
    print('SW');
  }

  if (lightX < NowX && lightY === NowY) {
    NowX--;
    print('W');
  }

  if (lightX < NowX && lightY < NowY) {
    NowX--;
    NowY--;
    print('NW');
  }
}