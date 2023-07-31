const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export class SimpleCipher {
  key: string;

  constructor(key?: string) {
    if (key === undefined) {
      this.key = this.generateKey();
    } else {
      if (!this.isValidKey(key))
        throw new Error("Key must be lowercase letters only");
      this.key = key;
    }
  }

  isValidKey(key: string): boolean {
    return /^[a-z]+$/.test(key);
  }

  generateKey(): string {
    let newKey = "";
    for (let i = 0; i < 100; i++) {
      newKey += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    }
    return newKey;
  }

  encode(str: string): string {
    let encoded = "";
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const charIndex = ALPHABET.indexOf(char);
      if (charIndex === -1) {
        encoded += char;
      } else {
        const shiftAmount = ALPHABET.indexOf(this.key[i % this.key.length]);
        const newCharIndex = (charIndex + shiftAmount) % ALPHABET.length;
        encoded += ALPHABET[newCharIndex];
      }
    }
    return encoded;
  }

  decode(str: string): string {
    let decoded = "";
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const charIndex = ALPHABET.indexOf(char);
      if (charIndex === -1) {
        decoded += char;
      } else {
        const shiftAmount = ALPHABET.indexOf(this.key[i % this.key.length]);
        const newCharIndex =
          (charIndex - shiftAmount + ALPHABET.length) % ALPHABET.length;
        decoded += ALPHABET[newCharIndex];
      }
    }
    return decoded;
  }
}
