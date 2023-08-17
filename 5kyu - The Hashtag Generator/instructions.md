# [The Hashtag Generator](https://www.codewars.com/kata/52449b062fb80683ec000024/javascript) (JavaScript)

---

### 5 Kyu

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (`#`).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return `false`.
If the input or the result is an empty string it must return `false`.

---

**Example(s)**

```
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```

## Solution

```
function generateHashtag(str) {

  if (str === null || str === undefined || str.trim() === "") {
    return false;
  }

  let words = str.split(" ").map((x) => {
    if (x !== "") {
      return x.charAt(0).toUpperCase() + x.slice(1);
    }
  });

  let hashtag = "#" + words.join("");

  if (hashtag.length > 140) {
    return false;
  }
  return hashtag;
}

// -------------------------------

console.log(generateHashtag(" Hello there thanks for trying my Kata"));
```