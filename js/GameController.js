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
          this.gamePlay.hitsNumber.innerText = Number
            .parseInt(this.gamePlay.hitsNumber.innerText, 10) + 1;
          imgInCell.remove();
        } else {
          this.gamePlay.missNumber.innerText = Number
            .parseInt(this.gamePlay.missNumber.innerText, 10) + 1;
          if (this.gamePlay.missNumber.innerText === '6') {
            alert('GAME OVER');
            this.gamePlay.hitsNumber.innerText = '0';
            this.gamePlay.missNumber.innerText = '0';
          }
        }
      });
    });
  }
}
