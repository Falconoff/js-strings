// console.log('hello world');
// console.log('hello');
function removeLastOccurrences(str, value) {
  const firstIndexOfValue = str.lastIndexOf(value);
  const valueLength = value.length;
  const lastIndexOfValue = firstIndexOfValue + valueLength;

  if (firstIndexOfValue < 0) {
    console.log(`"${str}"`);
    return str;
  }

  // console.log('firstIndexOfValue:', firstIndexOfValue);
  // console.log('lastIndexOfValue:', lastIndexOfValue);
  // console.log('valueLength:', valueLength);

  // const rez = str.slice(firstIndexOfValue, lastIndexOfValue);

  const result = str.slice(0, firstIndexOfValue) + str.slice(lastIndexOfValue);

  // console.log(`"${rez}"`);
  console.log(`"${result}"`);

  // return str.replace(value, '');
}

removeLastOccurrences('To be or not to be', 'be'), 'To be or not to ';
removeLastOccurrences('I like legends', 'end');
removeLastOccurrences('ABABAB', 'BA');
removeLastOccurrences('', 'test');
removeLastOccurrences('Hello, World!', '');
removeLastOccurrences('The quick brown fox', 'dog');
removeLastOccurrences('!@#', '!@');
