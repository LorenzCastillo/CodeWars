# [String ends with?](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/python) (Python)

---

### 7 Kyu

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

**Example(s)**

```
solution('abc', 'bc') # returns true
solution('abc', 'd') # returns false
```

---

## Solution

```
def solution(text, ending):
    return text.endswith(ending)

def main():
  print(solution("samurai", "ai"))

if __name__ == "__main__":
    main()
```