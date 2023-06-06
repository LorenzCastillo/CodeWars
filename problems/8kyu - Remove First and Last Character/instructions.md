# [Remove First and Last Character](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0) (C++)

---

### 8 Kyu

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

---

## Solution

```
#include <string>
#include <iostream>
#include <vector>

using namespace std; 

string sliceString (string str)
{
  int size = str.length();
  
  std::string newStr = str.erase(size-1);
  newStr = str.erase(0, 1);
  
  return newStr; 
}

int main() {
  std::string test = "country";
  std::cout << sliceString(test);

  return 0;
}
```