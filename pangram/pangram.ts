export function isPangram(str: string): boolean {
  const charsArr = str.replace(/[^A-Za-z]/g, '').toLowerCase().split('');
  const letters = new Map<string, number>();
  for (let char of charsArr) {
    if (!letters.has(char)) {
      letters.set(char, 1)
    }
  }
  if (letters.size === 26) {
    return true;
  }
  return false;
}
