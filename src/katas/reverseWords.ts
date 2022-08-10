export function reverseWords(str: string): string {
  const wordArray = str.split(' ');
  let newString = '';
  for (const word of wordArray) {
    newString += word.split('').reverse().join('') + ' ';
  }
  return newString.trim();
}
