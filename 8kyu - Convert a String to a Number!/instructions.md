# [Convert a String to a Number!](https://www.codewars.com/kata/544675c6f971f7399a000e79/cpp) (C++)

---

### 8 Kyu

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

**Example(s)**

```
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
```

---

## Solution

```
#include <string>
#include <iostream>

int string_to_number(const std::string& s) {
  return stoi(s);
}

int main() {
  std::string test = "53215";
  std::cout << string_to_number(test);

  return 0;
}
```