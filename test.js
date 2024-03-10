isPalindrome('madam');
isPalindrome('racecar');
isPalindrome('apple');
isPalindrome('No lemon, no melon');

function isPalindrome(str) {
  const normalizedStr = str.toLowerCase();
  const reversedStr = normalizedStr.split('').reverse().join('');
  console.log('newStr:', reversedStr);
  console.log('str:', str);
  console.log('is Palindrome -', reversedStr === normalizedStr);
  console.log('-----');
}
