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