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