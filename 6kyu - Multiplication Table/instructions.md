# [Multiplication table](https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/cpp) (C++)

---

### 6 Kyu

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

```
1 2 3
2 4 6
3 6 9
```

For the given example, the return value should be:

```
[[1,2,3],[2,4,6],[3,6,9]]
```

---

## Solution

```
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
```