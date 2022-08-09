export function isIsogram(str: string): boolean {
  const vowels = '/aeiou/i';
  const vowelSet = new Set<string>();
  for (const char of str) {
    if (RegExp(vowels).exec(char)) {
      if (vowelSet.has(char)) {
        return true;
      }
      vowelSet.add(char);
    }
  }
  return false;
}
