export function printerError(s: string): string {
  const invalidColors = /[n-z]/;
  let strLength = 0;
  let errorCount = 0;
  for (const char of s) {
    strLength++;
    if (invalidColors.exec(char)) {
      errorCount++;
    }
  }
  return `${errorCount}/${strLength}`;
}
