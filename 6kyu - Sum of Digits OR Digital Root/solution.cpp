#include <vector>
#include <iostream>

int digital_root(int n)
{
  std::vector<int> vector;
  int vectorSize = 0;
  int sum = 0;
  
  while (n > 0) {
    vector.push_back(n % 10);
    n /= 10;
    vectorSize++;
  }
  
  for (int i = 0; i < vectorSize; i++) {
    sum += vector[i];
  }
  
  if (sum >= 10) {
    return digital_root(sum);
  }

  return sum;
}

int main() {
  int test = 992;
  std::cout << digital_root(test);
  return 0;
}