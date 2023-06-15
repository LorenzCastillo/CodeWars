# [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c) (C++)

---

### 6 Kyu

The goal of this exercise is to convert a string to a new string where each character in the new string is `"("` if that character appears only once in the original string, or `")"` if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

**Example(s)**

```
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
```

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

**Note(s)**

Assertion messages may be unclear about what they display in some languages. If you read `"...It Should encode XXX"`, the `"XXX"` is the expected result, not the input!

---

## Solution

```
#include <string>
#include <iostream>
#include <cctype>

std::string duplicate_encoder(const std::string& word){
  std::string encodedString = "";
  
  for (int i = 0; i < word.length(); i++) {  
    std::string temp = "(";
    
    for (int j = 0; j < word.length(); j++) {
      // Check to see if they're in the same index so it can skip the letter
      if (j == i) {
        continue;
      }
      if (tolower(word[i]) == tolower(word[j])) {
        temp = ")";
        break;
      }
    }
    encodedString += temp;
  };
  
  return encodedString;
}

int main() {
  std::string test = "Supralapsarian";
  std::cout << duplicate_encoder(test);

  return 0;
}
```