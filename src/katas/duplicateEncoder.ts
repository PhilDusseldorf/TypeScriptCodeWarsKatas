export function duplicateEncoder(word: string): string{
  let charArray = word.toLowerCase().split("");
  let charPool = new Set<string>();
  let duplicates = new Set<string>();
  let result: string[] = []
  
  charArray.forEach((char: string) => {
    charPool.has(char) ? duplicates.add(char) : charPool.add(char);
  });
  charArray.forEach((char: string) => {
    duplicates.has(char) ? result.push(")") : result.push("(");
  });
  return result.join("");
}
