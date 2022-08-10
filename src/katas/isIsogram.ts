/* eslint-disable @typescript-eslint/no-unsafe-call */
export function isIsogram(str: string): boolean {
  const letters = /[a-z]/;
  const letterSet = new Set<string>();
  const word: string = str.toLowerCase();
  for (const char of word) {
    if (letters.exec(char)) {
      if (letterSet.has(char)) {
        return false;
      }
      letterSet.add(char);
    }
  }
  return true;
}
