# [Sum of Digits / Digital Root](https://www.codewars.com/kata/541c8630095125aba6000c00) (C++)

---

### 6 Kyu

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

**Example(s)**

```
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```

---

## Solution

```
#include <vector>
#include <iostream>

int digital_root(int n)
{
  std::vector<int> vector;
  int vectorSize = 0;
  int sum = 0;
  
  while (n > 0) {
    vector.push_back(n % 10);
    n /= 10;
    vectorSize++;
  }
  
  for (int i = 0; i < vectorSize; i++) {
    sum += vector[i];
  }
  
  if (sum >= 10) {
    return digital_root(sum);
  }

  return sum;
}

int main() {
  int test = 992;
  std::cout << digital_root(test);
  return 0;
}
```