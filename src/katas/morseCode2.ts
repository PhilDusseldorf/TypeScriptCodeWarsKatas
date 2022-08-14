/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { MORSE_CODE } from './MORSE_CODE';

const bit0 = '0';
const bit1 = '1';

export function decodeBits(bits: string): string {
  const cleanBits: string = bits.substring(
    bits.indexOf(bit1),
    bits.lastIndexOf(bit1) + 1,
  );
  const timeUnit: number = calcTimeUnit(cleanBits);

  const dash = buildRegexString(bit1, timeUnit * 3);
  const dot = buildRegexString(bit1, timeUnit);
  const morseSep = buildRegexString(bit0, timeUnit);
  const charSep = buildRegexString(bit0, timeUnit * 3);
  const wordSep = buildRegexString(bit0, timeUnit * 7);

  return cleanBits
    .replace(new RegExp(dash, 'g'), '-')
    .replace(new RegExp(charSep, 'g'), ' ')
    .replace(new RegExp(dot, 'g'), '.')
    .replace(new RegExp(morseSep, 'g'), '')
    .replace(new RegExp(wordSep, 'g'), '   ');
}

function calcTimeUnit(bits: string): number {
  const min0: number = findMinUnit(bits, bit0);
  const min1: number = findMinUnit(bits, bit1);
  return min0 < min1 ? min0 : min1;
}

function findMinUnit(bits: string, ofBit: string): number {
  let counter = 1;
  for (; counter < 20; counter++) {
    const regEx = buildRegexString(ofBit, counter);
    if (new RegExp(regEx).test(bits)) {
      break;
    }
  }
  return counter;
}

function buildRegexString(ofBit: string, counter: number): string {
  return `(?<!${ofBit})(${ofBit}{${counter}})(?!${ofBit})`;
}

export function decodeMorse(morseCode: string): string {
  const morseWords: string[] = morseCode.trim().split('   ');
  const words: string[] = [];

  morseWords.forEach((word) => {
    let translatedWord = '';
    word.split(' ').forEach((letter) => {
      translatedWord = translatedWord + MORSE_CODE(letter);
    });
    words.push(translatedWord);
  });
  return words.join(' ');
}
