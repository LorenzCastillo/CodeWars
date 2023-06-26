# [Simple multiplication](https://www.codewars.com/kata/583710ccaa6717322c000105/cpp) (C++)

---

### 8 Kyu

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

---

## Solution

```
#include <string>
#include <iostream>
#include <vector>

int simpleMultiplication(int a){
  // If it's even
  if (a % 2 == 0) return a * 8;
  // Otherwize...
  return a * 9;
}

int main() {
  int test = 5;
  std::cout << simpleMultiplication(test);

  return 0;
}
```