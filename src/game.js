class Game {
  constructor() {
    this.rollsIndex = [];
  }
  roll(pins) {
    this.rollsIndex.push(pins);
  };

  runningScore() {
    return this.rollsIndex.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  };
}
