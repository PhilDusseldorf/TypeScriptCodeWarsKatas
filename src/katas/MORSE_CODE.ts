/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
const morseAlphabet = new Map<string, string>([
  ['blanc', ' '],
  ['charSep', ''],
  ['A', '.-'],
  ['B', '-...'],
  ['C', '-.-.'],
  ['D', '-..'],
  ['E', '.'],
  ['F', '..-.'],
  ['G', '--.'],
  ['H', '....'],
  ['I', '..'],
  ['J', '.---'],
  ['K', '-.-'],
  ['L', '.-..'],
  ['M', '--'],
  ['N', '-.'],
  ['O', '---'],
  ['P', '.--.'],
  ['Q', '--.-'],
  ['R', '.-.'],
  ['S', '...'],
  ['T', '-'],
  ['U', '..-'],
  ['V', '...-'],
  ['W', '.--'],
  ['X', '-..-'],
  ['Y', '-.--'],
  ['Z', '--..'],
  ['1', '.----'],
  ['2', '..---'],
  ['3', '...--'],
  ['4', '....-'],
  ['5', '.....'],
  ['6', '-....'],
  ['7', '--...'],
  ['8', '---..'],
  ['9', '----.'],
  ['0', '-----'],
]);

export function MORSE_CODE(code: string): string {
  let encoded: string = code;
  let result = '';
  if (code === ' ') {
    encoded = 'charSep';
  }
  if (code === '   ') {
    encoded = 'blanc';
  }
  morseAlphabet.forEach((key: string, value: string) => {
    if (key === encoded) {
      result = value;
    }
  });
  return result;
}
