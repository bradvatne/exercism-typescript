const PLAIN: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
const CIPHER: string[] = "zyxwvutsrqponmlkjihgfedcba".split("");

const isLetter = (c: string) => {
  return /^[A-Za-z]$/.test(c);
};

const isNumber = (n: string) => {
  return /^-?\d+(\.\d+)?$/.test(n);
};

export function encode(plainText: string): string {
  const arr = plainText.split("");

  let count = 0;
  const res = arr.map((char) => {
    let replacement = "";
    if (count === 5) {
      replacement = " ";
      count = 0;
    }
    count++;
    if (isLetter(char)) {
      const index = PLAIN.indexOf(char.toLowerCase());
      replacement += CIPHER[index];
      return replacement;
    } else if (isNumber(char)) {
      return (replacement += char);
    } else {
      count--;
      return replacement;
    }
  });

  return res.join("");
}

export function decode(cipherText: string): string {
  const arr = cipherText.split("");

  const res = arr.map((char) => {
    if (isLetter(char)) {
      const index = CIPHER.indexOf(char.toLowerCase());
      const replacement = PLAIN[index];
      return replacement;
    } else if (char === " ") {
      return "";
    } else if (isNumber(char)) {
      return char;
    } else return;
  });

  return res.join("");
}
