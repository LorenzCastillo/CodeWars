String.prototype.toJadenCase = function () {
  words = this.split(" ");
  return words.map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
};

// -------------------------------

const sentence = "this is a sample sentence";
const jadenCaseSentence = sentence.toJadenCase();
console.log(jadenCaseSentence);