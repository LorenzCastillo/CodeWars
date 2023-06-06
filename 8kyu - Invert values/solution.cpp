#include <string>
#include <iostream>
#include <vector>

int simpleMultiplication(int a){
  // If it's even
  if (a % 2 == 0) return a * 8;
  // Otherwize...
  return a * 9;
}

int main() {
  int test = 5;
  std::cout << simpleMultiplication(test);

  return 0;
}