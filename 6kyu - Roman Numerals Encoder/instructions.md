# [Roman Numerals Encoder](https://www.codewars.com/kata/51b62bf6a9c58071c600001b ) (C++)

---

### 6 Kyu

Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

**Example(s)**

```
solution(1000); // should return "M"
```

**Help**

```
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
```

Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

---

## Solution

```
#include <iostream>
#include <string>
#include <cmath>

std::string solution(int number){
  if (number >= 4000) {
    return 0;
  }
  
  std::string romans[13] = { "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };
  int values[13] = { 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };
  
  std::string result = "";
  
  for (int i = 0; i < 13; i++) {
    int x = floor(number / values[i]);
    for (int j = 0; j < x; j++) {
      result += romans[i];
    }
    number -= values[i] * x;
  }
  
  return result;
}

int main() {
  int test = 2418;
  std::cout << solution(test);

  return 0;
}
```