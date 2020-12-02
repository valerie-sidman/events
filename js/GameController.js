import GamePlay from './GamePlay';

export default class GameController {
  constructor() {
    this.gamePlay = new GamePlay();
  }

  init() {
    this.gamePlay.cellsArray.forEach((cell) => {
      cell.addEventListener('click', (event) => {
        event.preventDefault();
        const imgInCell = cell.querySelector('img');
        if (imgInCell) {
          this.gamePlay.setHitsNumber(Number.parseInt(this.gamePlay.getHitsHumber(), 10) + 1);
          imgInCell.remove();
        } else {
          this.gamePlay.setMissNumber(Number.parseInt(this.gamePlay.getMissNumber(), 10) + 1);
          if (this.gamePlay.getMissNumber() === '6') {
            alert('GAME OVER');
            this.gamePlay.setHitsNumber('0');
            this.gamePlay.setMissNumber('0');
          }
        }
      });
    });
  }
}
