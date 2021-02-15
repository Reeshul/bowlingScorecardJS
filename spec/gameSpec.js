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

  it("the first item in the frames array is a 6 after 2 consecutive rolls of hitting 3 pins", () => {
    game.roll(3);
    game.roll(3);
    expect(game.framesArray[0]).toBe(6)
  })
});