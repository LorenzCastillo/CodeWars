#include <string>
#include <iostream>
#include <vector>

using namespace std; 

string sliceString (string str)
{
  int size = str.length();
  
  std::string newStr = str.erase(size-1);
  newStr = str.erase(0, 1);
  
  return newStr; 
}

int main() {
  std::string test = "country";
  std::cout << sliceString(test);

  return 0;
}