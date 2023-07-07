# [Break camelCase](https://www.codewars.com/kata/5208f99aee097e6552000148/javascript) (JavaScript)

---

### 6 Kyu

Complete the solution so that the function will break up camel casing, using a space between words.

**Example(s)**

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

---

## Solution

```
function camelCasing(A) {
  let sentence = "";
  let word = "";
  
  [...A].forEach((c, i) => {
    if (c === c.toUpperCase()) {
      sentence += word + " ";
      word = c;
    } else {
      word += c
    }

    if ([...A].length-1 === i) {
      sentence += word;

    }
  });
  return sentence;
}

// -------------------------------

console.log(camelCasing("camelCasing"));
```