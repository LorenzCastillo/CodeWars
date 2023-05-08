const tester = require("../../testCase.js");
const test = new tester();

function solution(number){
  let arr = [];
  
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push(i);
      continue;
    }
    if (i % 3 == 0) {
      arr.push(i);
      continue;
    }
    if (i % 5 == 0) {
      arr.push(i);
      continue;
    }
  }
  
  let total = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)
  
  return total;
}

// console.log(solution(10));
// console.log(solution(50));

// -------------------------------
test.run(__filename, 23, solution(10));
test.run(__filename, 543, solution(50));
