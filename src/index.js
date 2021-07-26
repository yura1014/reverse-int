module.exports = function reverse (n) {
  let arr;
  arr = String(n).split("");
  if (n > 0) {
    return Number(arr.reverse().join(""));
  } else {
    arr.splice(0, 1);
    arr.reverse();
    arr.splice(0, 0, "-");
    return Number(arr.join(""));
  }
}
