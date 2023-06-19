#include <vector>
#include <iostream>

std::vector<std::vector<int>> multiplication_table(int n){
  std::vector<std::vector<int>> table;
  
  for (int i = 1; i <= n; i++) {
    std::vector<int> tempRow;
    for (int j = 1; j <= n; j++) {
      tempRow.push_back(j * i);

      std::cout << (j * i) << " ";
    }
    std::cout << std::endl;
    table.push_back(tempRow);
  }
  
  return table;
}

int main() {
  int test = 3;
  multiplication_table(test);
  return 0;
}