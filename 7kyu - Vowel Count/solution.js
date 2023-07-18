function getCount(str) {
  let count = 0;
  
  str.split("").map((letter) => {
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
      count++;
    }
  })
  
  return count;
}

// -------------------------------

console.log(getCount("abracadabra"));