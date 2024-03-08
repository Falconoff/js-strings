function sumOfCodes(str) {
  if (typeof str !== 'string' || str.length === 0) {
    console.log(0);
    return 0;
  }

  console.log(str);

  let summ = 0;

  for (let i = 0; i < str.length; i += 1) {
    // console.log('code:', str.charCodeAt(i));
    // console.log('char:', str[i]);

    summ += str.charCodeAt(i);
  }
  console.log('summ:', summ);
  console.log('=====');
  // console.log(str.charCodeAt(1));
  // console.log(str.charCodeAt(2));
  // console.log(str.charCodeAt(3));
  // console.log('=====');
}

sumOfCodes('My String');
//  861
sumOfCodes('12345');
//  255
sumOfCodes('');
//  0
sumOfCodes();
//  0
sumOfCodes(null);
//  0
sumOfCodes(undefined);
//  0
sumOfCodes('Hello, World!');
//  1129
sumOfCodes('!@#$%^&*()');
//  460
