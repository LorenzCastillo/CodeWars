# [Jaden Casing Strings](https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript) (JavaScript)

---

### 7 Kyu

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

**Example(s)**

```
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
```

---

## Solution

```
String.prototype.toJadenCase = function () {
  words = this.split(" ");
  return words.map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
};

// -------------------------------

const sentence = "this is a sample sentence";
const jadenCaseSentence = sentence.toJadenCase();
console.log(jadenCaseSentence);
```