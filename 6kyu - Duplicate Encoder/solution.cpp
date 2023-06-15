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