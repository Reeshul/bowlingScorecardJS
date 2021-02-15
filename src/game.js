class Game {
  constructor() {
    this.currentRollsArray = [];
    this.allRollsArray = [];
    this.framesArray = [];
  }
  roll(pins) {
    this.currentRollsArray.push(pins);
    // if rolls array length has two numbers in it
    if (this.currentRollsArray.length === 2) {
      // push the entire array into the allRollsArray array

      // and then empty the currentRollsArray

      // and then push the sum of the newly pushed array in the allRollsArray array in the frames array
    }
  };

  runningScore() {
    return this.currentRollsArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  };
}
