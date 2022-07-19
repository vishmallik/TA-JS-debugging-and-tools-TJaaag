function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
//Test 1
let result = fullName("Arya");
let expected = "Arya";
if (result !== expected) {
  throw new Error(`${expected} is not equals to ${result}`);
}
//Test 2
let result2 = fullName("Arya");
let expected2 = `Arya ${undefined}`;
if (result2 !== expected2) {
  throw new Error(`${expected2} is not equals to ${result2}`);
}

function total(amount, taxRate) {
  return amount + amount * taxRate;
}
//Test 1
let result3 = total(50, 2);
let expected3 = 100;
if (result3 !== expected3) {
  throw new Error(`${expected3} is not equals to ${result3}`);
}
//Test 2
let result4 = total(50, 2);
let expected4 = 150;
if (result4 !== expected4) {
  throw new Error(`${expected4} is not equals to ${result4}`);
}
