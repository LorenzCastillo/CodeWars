# [Credit Card Mask](https://www.codewars.com/kata/5412509bd436bd33920011bc/javascript) (JavaScript)

---

### 7 Kyu

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function `maskify`, which changes all but the last four characters into `'#'`.

**Example(s)**

```
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
```

---

## Solution

```
function maskify(cc) {
  if (cc.length > 4) {
    let x = cc.slice(cc.length - 4, cc.length);
    let y = "";
    for (let i = 0; i < cc.length - 4; i++) {
      y += "#";
    }
    return y+x;
  }
  return cc;
}

// -------------------------------

console.log(maskify("4556364607935616"));
```