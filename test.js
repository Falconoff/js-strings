function invertCase(str) {
  return str
    .split('')
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
}

console.log(invertCase('Hello, World!'));
console.log(invertCase('JavaScript is Fun'));
console.log(invertCase('12345'));
