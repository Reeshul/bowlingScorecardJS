# Bowling Challenge - JavaScript #

An application that shows the running score of a bowling game for a single player after each frame after entering the individual scores for each roll.

## Objectives

- Diagramming
- Test driving the code (following the TDD process)
- Testing behavior rather than state
- Single Responsibility Principle and encapsulation
- Clear and readable code that's DRY
- Building a user interface to display the scorecard

## Technologies used

JavaScript. Tested using Jasmine.

## Diagramming ##

### User Story ###

```
As a bowling player
In order to see my running score after each frame
I would like to enter my score on a scorecard after each roll 
```

## Example Tests ##

| .gameRoll() |.framesArray|.score() | 
| :------------- | :------------- | :----: |
| [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] | [0,0,0,0,0,0,0,0,0,0] | 0 |
| [10,10,10,10,10,10,10,10,10,10,10,10] | [30,60,90,120,150,180,210,240,270,300]| 300 |
| [0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0] | [10,20,30,40,50,60,70,80,90,100] | 100 |
| [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6] | [5,14,29,49,60,61,77,97,117,133] | 133 |