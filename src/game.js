"use-strict";

class Game {
  constructor() {
    this.currentRollsArray = [];
    this.allRollsArray = [];
    this.framesScoresArray = [];
  }
  roll(pins) {
    this.currentRollsArray.push(pins);
    // if currentRollsArray length has two numbers in it
    if (this.currentRollsArray.length === 2) {
      // push the entire array into the allRollsArray array
      this.allRollsArray.push(this.currentRollsArray);
      // and then push the sum of the newly pushed array in the allRollsArray array in the framesScoresArray
      this.framesScoresArray.push(sumArray(this.currentRollsArray));
      // and then empty the currentRollsArray
      this.currentRollsArray = [];
    }
  }

  runningScore() {
    // if we're one roll into a frame
    if (this.currentRollsArray[0]) {
      // return the sum of the frame scores plus the pins in the last roll
      return (
        this.framesScoresArray.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        ) + this.currentRollsArray[0]
      );
      // otherwise if we've completed a frame
    } else {
      // return the sum of the frame scores
      return this.framesScoresArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    }
  }
}
