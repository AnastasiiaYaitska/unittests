import { expect, test } from "vitest";
import {
  add,
  subtract,
  multiply,
  divide,
  isEven,
  generateNumberText,
  calculateGrade,
  findAverage,
  squareDigits,
  removeEverySecondElement,
} from "./calculations";

// function add(a, b) {
//   return a + b;
// }
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

// function subtract(a, b) {
//   return a - b;
// }
test("subtracts 2 - 1 to equal 1", () => {
  expect(subtract(2, 1)).toBe(1);
});

// function multiply(a, b) {
//   return a * b;
// }
test("multiply 2 * 2 to equal 4", () => {
  expect(multiply(2, 2)).toBe(4);
});

// function divide(a, b) {
//   return a / b;
// }
test("divide 4 / 2 to equal 2 ", () => {
  expect(divide(4, 2)).toBe(2);
});

// function isEven(a) {
//   if (a % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
test("Remainder equal 0", () => {
  expect(isEven(2)).toBe(true);
});

test("Remainder not equal 0", () => {
  expect(isEven(1)).toBe(false);
});

test("Remainder not equal 0 if input is string", () => {
  expect(isEven("one")).toBe(false);
});

test("Remainder not equal 0 if input negative number", () => {
  expect(isEven(-1)).toBe(false);
});

// function generateNumberText(a)
test("Generation of number 1 text ", () => {
  expect(generateNumberText(1)).toBe("one");
});

test("Generation of number 2 text", () => {
  expect(generateNumberText(2)).toBe("two");
});

test("Generation of number 3 text", () => {
  expect(generateNumberText(3)).toBe("three");
});

test("Generation of number 0 text", () => {
  expect(generateNumberText(0)).toBe("unknown");
});

test("Generation of number 4 text", () => {
  expect(generateNumberText(4)).toBe("unknown");
});

test("Generation of number one text", () => {
  expect(generateNumberText("one")).toBe("unknown");
});

test("Generation of number -1 text", () => {
  expect(generateNumberText(-1)).toBe("unknown");
});

// function calculateGrade(score)
test("Calculate garde A", () => {
  // Arrange
  const score = 91;

  // Act
  const a = calculateGrade(score);

  // Ascent
  expect(a).toBe("A");
});

test("Calculate garde A", () => {
  // Arrange
  const score = 100;

  // Act
  const a = calculateGrade(score);

  // Ascent
  expect(a).toBe("A");
});

test("Calculate garde B", () => {
  // Arrange
  const score = 89;

  // Act
  const a = calculateGrade(score);

  // Ascent
  expect(a).toBe("B");
});

test("Calculate garde C", () => {
  // Arrange
  const score = 70;

  // Act
  const a = calculateGrade(score);

  // Ascent
  expect(a).toBe("C");
});

test("Calculate garde D", () => {
  // Arrange
  const score = 61;

  // Act
  const a = calculateGrade(score);

  // Ascent
  expect(a).toBe("D");
});

test("Calculate garde F", () => {
  // Arrange
  const score = 59;

  // Act
  const a = calculateGrade(score);

  // Ascent
  expect(a).toBe("F");
});

test("Calculate garde F", () => {
  // Arrange
  const score = -1;

  // Act
  const a = calculateGrade(score);

  // Ascent
  expect(a).toBe("F");
});

// function findAverage(numbers)
test("Average of array [[1,2,3],[4,5,6]] === 3,5", () => {
  // Arrange
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  // Act
  const a = findAverage(numbers);
  // Ascent
  expect(a).toBe(3.5);
});

test("Average of array [[-1,-2,-3],[-4,-5,-6]] === -3,5", () => {
  // Arrange
  const numbers = [
    [-1, -2, -3],
    [-4, -5, -6],
  ];
  // Act
  const a = findAverage(numbers);
  // Ascent
  expect(a).toBe(-3.5);
});

test("Average of array [5] === 5", () => {
  // Arrange
  const numbers = [[5]];
  // Act
  const a = findAverage(numbers);
  // Ascent
  expect(a).toBe(5);
});

// ??????
// test("Average of array [] === NaN", () => {
//   // Arrange
//   const numbers = [];
//   // Act
//   const a = findAverage(numbers);
//   // Ascent
//   expect(a).toBe(NaN);
// });

// function squareDigits
test("square digits array [0,1,2,3,4] === 14916", () => {
  // Arrange
  const numbers = [0, 1, 2, 3, 4];
  // Act
  const a = squareDigits(numbers);
  // Ascent
  expect(a).toBe(14916);
});

test("square digits array [-0,-1,-2,-3,-4] === 14916", () => {
  // Arrange
  const numbers = [-0, -1, -2, -3, -4];
  // Act
  const a = squareDigits(numbers);
  // Ascent
  expect(a).toBe(14916);
});

test("square digits array [0] === 0", () => {
  // Arrange
  const numbers = [0];
  // Act
  const a = squareDigits(numbers);
  // Ascent
  expect(a).toBe(0);
});

// function removeEverySecondElement
test("remove every second element in array [0,1,2,3,4] => [0,2,4] ", () => {
  // Arrange
  const numbers = [0, 1, 2, 3, 4];
  // Act
  const a = removeEverySecondElement(numbers);
  // Ascent
  expect(a).toStrictEqual([0, 2, 4]);
});
