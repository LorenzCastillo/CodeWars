# [Vowel Count](https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript) (JavaScript)

---

### 7 Kyu

Return the number (count) of vowels in the given string.

We will consider `a`, `e`, `i`, `o`, `u` as vowels for this Kata (but not `y`).

The input string will only consist of lower case letters and/or spaces.

---

## Solution

```
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
```