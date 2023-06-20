# [Beginner - Reduce but Grow](https://www.codewars.com/kata/57f780909f7e8e3183000078/cpp) (C++)

---

### 8 Kyu

Given a non-empty array of integers, return the result of multiplying the values together in order.

**Example(s)**

```
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
```

---

## Solution

```
#include <iostream>
#include <vector>

int grow(std::vector<int> nums) {
  
  int result = 1;
  
  for (int i = 0; i < nums.size(); i++) {
    result *= nums[i];
  }
  
  return result;
}

int main() {
  std::vector<int> test = {1, 2, 3, 4};
  std::cout << grow(test);

  return 0;
}
```