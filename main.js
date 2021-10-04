function isPalindrome(string) {
  var charsFromString = string.toLowerCase().match(/[a-z0-9]/g);
  var forwardIndex = 0;
  var backwardIndex = charsFromString.length - 1;

  while (forwardIndex < charsFromString.length) {
    if (charsFromString[forwardIndex] !== charsFromString[backwardIndex]) {
      return false;
    }

    forwardIndex++;
    backwardIndex--;
  }

  return true;
}