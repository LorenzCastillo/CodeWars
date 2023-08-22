snail = function(array) {
  
  // 1, 1 (start at the y variable)
  // 1, 2
  // 1, 3
  // 1, 4 (Change here to the x variable)
  // 2, 4
  // 3, 4
  // 4, 4 (start decrementing y (n * -1))
  // 4, 3
  // 4, 2
  // 4, 1
  // 3, 1
  // 2, 1
  
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

    // console.log("OFFSET", offset);
    // console.log("x", y);
    // console.log("y", x);
    // console.log("n", n);

    if (offset * 2 + 1 === array.length) {
      arr.push(array[offset][offset]);
    }

    // OLD CODE
    // if (yTurn) {
    //   if (isIncrement) {
    //     if (y === n - 1) {
    //       yTurn = !yTurn;
    //       // console.log(arr);

    //     } else {
    //       // console.log("RIGHT");
    //       arr.push(array[x + offset][y + offset]);
    //       y++;
    //     }
    //   } else {
    //     if (y === 0) {
    //       yTurn = !yTurn;
    //       // console.log(arr);

    //     } else {
    //       // console.log("LEFT");
    //       arr.push(array[x + offset][y + offset]);
    //       y--;
    //     }
    //   }
    // }

    // else {
    //   if (isIncrement) {
    //     if (x === n - 1) {
    //       yTurn = !yTurn;
    //       isIncrement = !isIncrement;
    //       // console.log(arr);

    //     } else {
    //       // console.log("DOWN");
    //       arr.push(array[x + offset][y + offset]);
    //       x++;
    //     }
    //   } else {
    //     if (x === 0) {
    //       yTurn = !yTurn;
    //       isIncrement = !isIncrement;
    //       offset++;
    //       n -= 2;
    //       // console.log(arr);

    //     } else {
    //       // console.log("UP");
    //       arr.push(array[x + offset][y + offset]);
    //       x--;
    //     }
    //   }
    // }
    // console.log(arr);

    // console.log("=====");

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

// console.log(snail([[1]]));
// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));


// 1,  2,  3,  4,  5
// 6,  7,  8,  9,  10
// 11, 12, 13, 14, 15
// 16, 17, 18, 19, 20
// 21, 22, 23, 24, 25