"use-strict";

describe("score", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("outputs a score of 0 after 3 consecutive roll of hitting 0 pins", () => {
    game.roll(0);
    game.roll(0);
    game.roll(0);
    expect(game.runningScore()).toBe(0);
  });

  it("outputs a score of 0 after 20 consecutive roll of hitting 0 pins", () => {
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    expect(game.runningScore()).toBe(0);
  });

  it("outputs a score of 6 after 2 consecutive rolls of hitting 3 pins", () => {
    game.roll(3);
    game.roll(3);
    expect(game.runningScore()).toBe(6);
  });

  it("the first item in the frames array is a 9 after rolling a 4 and then a 5", () => {
    game.roll(4);
    game.roll(5);
    expect(game.framesScoresArray).toEqual([9]);
  });

  it("the first subarray in the allRollsArray is [4,5] after rolling a 4 and then a 5", () => {
    game.roll(4);
    game.roll(5);
    expect(game.allRollsArray).toEqual([[4, 5]]);
  });

  it("the currentRollsArray is empty after rolling a 4 and then a 5", () => {
    game.roll(4);
    game.roll(5);
    expect(game.currentRollsArray).toEqual([]);
  });

  it("outputs a score of 15 after 5 consecutive roll of hitting 3 pins", () => {
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    expect(game.runningScore()).toBe(15);
  });

  it("outputs a score of 17 after rolling 8, 1, 5, 3", () => {
    game.roll(8);
    game.roll(1);
    game.roll(5);
    game.roll(3);
    expect(game.runningScore()).toBe(17);
  });
  it("the second item in the frames array is 19 after rolling 8, 1, 5, 3", () => {
    game.roll(8);
    game.roll(1);
    game.roll(5);
    game.roll(3);
    expect(game.framesScoresArray.map(cumulativeSum)).toEqual([9,17]);
  });
});