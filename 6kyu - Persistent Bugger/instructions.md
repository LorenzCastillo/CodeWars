# [Persistent Bugger](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/cpp) (C++)

---

### 6 Kyu

Write a function, `persistence`, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in `num` until you reach a single digit.

For example **(Input --> Output)**:

```
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
```

---

## Solution

```
#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

int persistence(long long n){
  
  int prevValue = n;
  int count = 0;
  
  while(true) {
    std::vector<int> nums;
    long long currentValue = prevValue;           
    int vectorSize = 0;
    int temp = 1;
    
    // This is to check if the initial value is one digit
    if (currentValue < 10) {
      break;
    }    

    while (currentValue != 0) {
      // n % 10 will get the last digit of a number, push that to the vector
      nums.push_back(currentValue % 10);
      // Remove the last digit now
      currentValue = floor(currentValue * 0.10);
      // Keep track of the vector array
      vectorSize++;
      // Loop until you get every digit
    }
    // The vector will look like [9, 3] after putting 39, reverse that vector to [3, 9]
    std::reverse(nums.begin(), nums.end());
  
    // Multiply the values in the vector together
    for (int i = 0; i < vectorSize; i++) {
      temp *= nums[i];
    };
    
    // Store the value so it can be looped around again later
    prevValue = temp;
    count++;
    
    // If the current value is one digit, break
    if (temp < 10) {
      break;
    }
  }
  
  return count;
}

int main() {
  long long test = 39;
  std::cout << persistence(test);

  return 0;
}
```