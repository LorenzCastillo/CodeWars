#include <iostream>
#include <vector>

std::vector<int> invert(std::vector<int> values)
{
  std::vector<int> invertedValues = {};
  
  for (int i = 0; i < values.size(); i++) {
    invertedValues.push_back(values[i] * -1);

    std::cout << invertedValues[i] << std::endl;
  };
  
  return invertedValues;
}

int main() {
  std::vector<int> test = {1, -2, 3, -4, 5};
  
  invert(test);

  return 0;
}