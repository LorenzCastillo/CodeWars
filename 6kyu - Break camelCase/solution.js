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