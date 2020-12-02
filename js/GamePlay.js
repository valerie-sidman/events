import goblinImg from '../img/goblin.png';

export default class GamePlay {
  constructor() {
    this.hitsNumber = document.querySelector('.number-hits');
    this.missNumber = document.querySelector('.number-miss');
    this.cellsArray = document.querySelectorAll('.cell');
    this.init();
  }

  init() {
    this.cellsArray = Array.from(this.cellsArray);
    const image = document.createElement('img');
    image.src = goblinImg;
    let randomIndex;
    setInterval(() => {
      const randomNumber = GamePlay.getRandomInt(0, (this.cellsArray.length - 1));
      if (randomNumber === randomIndex) {
        if (randomNumber === this.cellsArray.length - 1) {
          randomIndex -= 1;
        } else {
          randomIndex += 1;
        }
      } else {
        randomIndex = randomNumber;
      }
      this.cellsArray[randomIndex].appendChild(image);
    }, 1000);
  }

  setHitsNumber(number) {
    this.hitsNumber.innerText = number;
  }

  getHitsHumber() {
    return this.hitsNumber.innerText;
  }

  setMissNumber(number) {
    this.missNumber.innerText = number;
  }

  getMissNumber() {
    return this.missNumber.innerText;
  }

  static getRandomInt(min, max) {
    const min0 = Math.ceil(min);
    const max0 = Math.floor(max);
    return Math.floor(Math.random() * (max0 - min0) + min0);
  }
}
