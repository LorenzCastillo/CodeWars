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