# [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83/cpp) (C++)

---

### 6 Kyu

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

**Example(s)**

```
createPhoneNumber(int[10]{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"
```

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

---

## Solution

```
#include <string>
#include <iostream>

std::string createPhoneNumber(const int arr [10]){
  std::string phoneNumber = "(";
  
  for (int i = 0; i < 10; i++) {
    if (i == 3) {
      phoneNumber += ") ";
    } 
    if (i == 6) {
      phoneNumber += "-";
    }
    phoneNumber += std::to_string(arr[i]);
  }
  
  return phoneNumber;
}

int main() {
  int testArr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
  std::cout << createPhoneNumber(testArr);

  return 0;
}
```