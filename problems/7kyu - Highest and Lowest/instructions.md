# [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83/cpp) (C++)

---

### 7 Kyu

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

**Examples**

```
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```

**Notes**

- All numbers are valid Int32, no need to validate them.

- There will always be at least one number in the input string.

- Output string must be two numbers separated by a single space, and highest number is first.

---

## Solution

```
#include <string>
#include <vector>
#include <sstream>
#include <iostream>

std::string highAndLow(const std::string& numbers){
    std::vector<int> vect;
    std::stringstream ss(numbers);
    std::string result;
    int num;
    int min;
    int max;

    while (ss >> num) {
        vect.push_back(num);
    };

    // Check to find the min/max number
    for (int i = 0; i < vect.size(); i++) {
        if (i == 0) {
            min = vect[i];
            max = vect[i];
            continue;
        };

        if (vect[i] < min) {
            min = vect[i];
        };

        if (vect[i] > max) {
            max = vect[i];
        };
    }

    return std::to_string(max) + " " + std::to_string(min);
}

int main() {
    std::string test = "2 7 1 5 9";
    std::cout << highAndLow(test);

    return 0;
}
```