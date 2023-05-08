# [Multiples of 3 or 5](https://www.codewars.com/kata/514b92a657cdc65150000006) (JavaScript)

---

### 6 Kyu

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

---

## Solution

```
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
```