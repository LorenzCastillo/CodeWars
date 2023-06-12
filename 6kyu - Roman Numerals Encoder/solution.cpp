#include <iostream>
#include <string>
#include <cmath>

std::string solution(int number){
  if (number >= 4000) {
    return 0;
  }
  
  std::string romans[13] = { "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };
  int values[13] = { 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };
  
  std::string result = "";
  
  for (int i = 0; i < 13; i++) {
    int x = floor(number / values[i]);
    for (int j = 0; j < x; j++) {
      result += romans[i];
    }
    number -= values[i] * x;
  }
  
  return result;
}

int main() {
  int test = 2418;
  std::cout << solution(test);

  return 0;
}