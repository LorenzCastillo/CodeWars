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