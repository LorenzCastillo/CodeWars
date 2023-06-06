#include <string>
#include <iostream>

std::string createPhoneNumber(const int arr [10]){
  std::string phoneNumber = "(";
  
  for (int i = 0; i < 10; i++) {
    if (i == 3) {
      phoneNumber += ") ";
    } 
    if (i == 6) {
      phoneNumber += "-";
    }
    phoneNumber += std::to_string(arr[i]);
  }
  
  return phoneNumber;
}

int main() {
  int test[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
  std::cout << createPhoneNumber(test);

  return 0;
}