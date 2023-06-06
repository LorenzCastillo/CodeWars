# [Invert values](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad) (C++)

---

### 8 Kyu

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

**Example(s)**

```
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
```

---

## Solution

```
#include <iostream>
#include <vector>

std::vector<int> invert(std::vector<int> values)
{
  std::vector<int> invertedValues = {};
  
  for (int i = 0; i < values.size(); i++) {
    invertedValues.push_back(values[i] * -1);

    std::cout << invertedValues[i] << std::endl;
  };
  
  return invertedValues;
}

int main() {
  std::vector<int> test = {1, -2, 3, -4, 5};
  
  invert(test);

  return 0;
}
```