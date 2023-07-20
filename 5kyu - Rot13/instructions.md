# [Rot13](https://www.codewars.com/kata/530e15517bc88ac656000716/javascript) (JavaScript)

---

### 5 Kyu

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

---

## Solution

```
function rot13(message) {
  // https://www.petefreitag.com/cheatsheets/ascii-codes/

  let encodedMessage = "";

  for (let i = 0; i < message.length; i++) {
    let code = message.charCodeAt(i);
    
    if (code >= 65 && code <= 90) {
      encodedMessage += code + 13 > 90 ? String.fromCharCode(code-13) : String.fromCharCode(code+13);
    } else if (code >= 97 && code <= 122) {
      encodedMessage += code + 13 > 122 ? String.fromCharCode(code-13) : String.fromCharCode(code+13);
    } else {
      encodedMessage += message[i];
    }
  }
  return encodedMessage;
}

// -------------------------------

console.log(rot13("MesSage"));
```