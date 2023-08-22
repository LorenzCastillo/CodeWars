# [Snail](https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript) (JavaScript)

---

### 4 Kyu

Given an `n x n` array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

**Example(s)**

```
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
```

For better understanding, please follow the numbers of the next array consecutively:

```
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
```

---

## Solution

```
snail = function(array) {
  
  if (array[0][0] === undefined) {
    return [];
  }

  if (array.length === 1) {
    return [array[0][0]];
  }
  
  let arr = [];
  let n = array.length;
  let x = 0;
  let y = 0; 
  let yTurn = true;
  let isIncrement = true;
  let offset = 0;
  
  while (arr.length !== array.length * array.length) {

    if (offset * 2 + 1 === array.length) {
      arr.push(array[offset][offset]);
    }

    if (yTurn) {
      if ((isIncrement && y === n - 1) || (!isIncrement && y === 0)) {
        yTurn = !yTurn;
      } else {
        arr.push(array[x + offset][y + offset]);
        y += isIncrement ? 1 : -1;
      }
    }

    else {
      if (isIncrement && x === n - 1) {
        yTurn = !yTurn;
        isIncrement = !isIncrement;
      } else if (!isIncrement && x === 0) {
        yTurn = !yTurn;
        isIncrement = !isIncrement;
        offset++;
        n -= 2;
      }
      else {
        arr.push(array[x + offset][y + offset]);
        x += isIncrement ? 1 : -1;
      }
    }
  }

  return arr;
}

// -------------------------------

console.log(snail([[1]]));
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
```