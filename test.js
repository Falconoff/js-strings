function encodeToRot13(str) {
  const originalStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const rot13Str = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  // const originalArr = originalStr.split('');
  // const rot13Arr = rot13Str.split('');

  // console.log(str.split(''));

  let rez = '';

  // for (const char of str) {
  //   let ind13 = originalStr.indexOf(char);
  //   // console.log('index:', ind13);
  //   rez += ind13 === -1 ? char : rot13Str[ind13];
  // }

  // str.split('').map((char) => {
  //   let ind13 = originalStr.indexOf(char);
  //   rez += ind13 === -1 ? char : rot13Str[ind13];
  // });

  /*
   */
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
    ''
  );
  const rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

  console.log(
    str
      .split('')
      .map((elem) => rot13[alphabet.indexOf(elem)])
      .join('')
  );

  // console.log('result:', rez);
}

// 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
// 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
encodeToRot13('ABO abo');

//  *   'hello' => 'uryyb'
// encodeToRot13('hello');
// encodeToRot13('Gb trg gb gur bgure fvqr!');
