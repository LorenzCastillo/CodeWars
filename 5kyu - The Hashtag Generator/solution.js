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