function min(a, b) {if (a < b) 
  return a;
 else 
   return b};
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

function isEven(num) {
  if (num === 0)
    return true;
      else if (num === 1)
    return false;
      else if (num < 0)
        return isEven(-num);
      else
        return isEven(num - 2);
};

function countChar(string, letter) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == letter)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
};