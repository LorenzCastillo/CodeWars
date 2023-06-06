#include <string>
#include <iostream>

int string_to_number(const std::string& s) {
  return stoi(s);
}

int main() {
  std::string test = "53215";
  std::cout << string_to_number(test);

  return 0;
}