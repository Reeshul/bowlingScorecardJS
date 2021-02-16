"use-strict";

const sumArray = (array) =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue);

const cumulativeSum = ((sum) => (value) => (sum += value))(0);
