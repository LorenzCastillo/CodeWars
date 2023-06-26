function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let test = A[i];
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] == test) {
        count++;
      }
    }
    if (count % 2 == 1) {
      return test;
    }
  }
  return "none";
}

// -------------------------------

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));