//#### Write your implementation of testing framework and assertion. Only after completing this go forward.
// function even(num) {
//   return num % 2 === 0;
// }

// function odd(num) {
//   return num % 2 !== 0;
// }
// let result, expected;
// //Testing framework
// function test(msg, cb) {
//   try {
//     cb();
//     console.log("Passed", msg);
//   } catch (error) {
//     console.error(error);
//     console.log("Failed", msg);
//   }
// }
// //Assertion
// function expect(actual) {
//   return {
//     toEqual: function (expected) {
//       if (actual !== expected) {
//         throw new Error(`${actual} not equals to ${expected}`);
//       }
//     },
//   };
// }

// function testEven() {
//   result = even(10);
//   expected = true;
//   expect(result).toEqual(expected);
// }

// function testOdd() {
//   result = odd(45);
//   expected = True;
//   expect(result).toEqual(expected);
// }

// console.log(
//   test("testing odd or even", () => {
//     expect(odd(3)).toEqual(true);
//   })
// );

//#### Write two tests for the following functions using test framework assertion

/*#### Add two number

1. Write a function that takes two input `numA` and `numB` and returns the sum of both numbers.
2. After writing the function write 5 tests for above function with different values
3. Throw an error when the arguments passed in not a number.
4. Make first test fail and see if you get the result of second test.
5. If not fix it using the test framework (try...catch) we learned in the testing framework video.*/

function sum(numA, numB = 0) {
  return numA + numB;
}

function test2(msg = "", cb) {
  try {
    cb();
    console.log("Passed", msg);
  } catch (error) {
    console.error(error);
    console.log("Failed", msg);
  }
}
function expect(actual) {
  return {
    toEqual: function (expected) {
      if (typeof actual !== expected) {
        throw new Error(`${typeof actual} is not equal to ${expected}`);
      }
    },
  };
}
//test1
console.log(
  test2("sum of 50 and 54", () => {
    expect(sum("50", "54")).toEqual("number");
  })
);

//test2
console.log(
  test2("sum of 50 and 54", () => {
    expect(sum(50, 54)).toEqual("number");
  })
);

//test3
console.log(
  test2("sum of 2 and 51", () => {
    expect(sum(2, 51)).toEqual("number");
  })
);

//test4
console.log(
  test2("sum of 25 and 11", () => {
    expect(sum(25, 11)).toEqual("number");
  })
);

//test5
console.log(
  test2("sum of 22 and 12", () => {
    expect(sum(22, 12)).toEqual("number");
  })
);
/*#### Multiply two numbers

1. Write a function that takes two input `numA` and `numB` and returns the multiplication of both numbers.
2. After writing the function write 5 tests for above function with different values
3. Throw an error when the arguments passed in not a number.
4. Make first test fail and see if you get the result of second test.
5. If not fix it using the test framework (try...catch) we learned in the testing framework video.*/

function multiply(numA, numB = 1) {
  return numA * numB;
}

function test3(msg = "", cb) {
  try {
    cb();
    console.log("Passed", msg);
  } catch (error) {
    console.error(error);
    console.log("Failed", msg);
  }
}
function expect(actual) {
  return {
    toEqual: function (expected) {
      if (isNaN(actual) !== expected) {
        throw new Error(`${isNaN(actual)} is not equal to ${expected}`);
      }
    },
  };
}
//test1
console.log(
  test3("multiplication of abc and 4", () => {
    expect(multiply("abc", "4")).toEqual(false);
  })
);

//test2
console.log(
  test3("multiplication of 5 and 10", () => {
    expect(multiply(5, 10)).toEqual(false);
  })
);

//test3
console.log(
  test3("multiplication of 2 and 20", () => {
    expect(multiply(2, 20)).toEqual(false);
  })
);

//test4
console.log(
  test3("multiplication of 11 and 21", () => {
    expect(multiply(11, 21)).toEqual(false);
  })
);

//test5
console.log(
  test3("multiplication of 54 and 12", () => {
    expect(multiply(54, 12)).toEqual(false);
  })
);
