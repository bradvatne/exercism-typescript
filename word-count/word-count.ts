export function count(phrase: string):object {
  const words = new Map();
  const regex = /(?:[a-zA-Z0-9](?:'[a-zA-Z0-9])*)+/g;
  phrase.toLowerCase().match(regex)?.forEach(word => words.set(word, (words.get(word) ?? 0) + 1));
  return words;
}