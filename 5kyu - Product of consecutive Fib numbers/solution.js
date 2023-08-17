function productFib(prod) {
  const sequence = [0, 1];

  for (let i = 2; prod >= sequence[i - 1] * sequence[i - 2]; i++) {
    if (sequence[i - 1] * sequence[i - 2] === prod) {
      return [sequence[i - 2], sequence[i - 1], true];
    }

    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return [sequence[sequence.length - 2], sequence[sequence.length - 1], false]
}

// -------------------------------

console.log(productFib(4895));