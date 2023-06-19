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