/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getMessage } from './utils';
import { duplicateEncoder } from './katas/duplicateEncoder';
import { decodeBits, decodeMorse } from './katas/morseCode2';

console.log(getMessage());
console.log(duplicateEncoder('din'));
console.log('---Decode Morse---');
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
console.log('---Decode Bits---');
console.log(
  decodeBits(
    '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011',
  ),
);
console.log('---Morse Code---');
console.log(
  decodeMorse(
    decodeBits(
      '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011',
    ),
  ),
);
