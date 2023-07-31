const KEY_INPUT = "abcdefghijklmnopqrstuvwxyz";

export class SimpleCipher {
  key: string;
  constructor() {
    this.key = this.generateKey();
  }

  generateKey(): string {
    let newKey = "";
    for (let i = 0; i < 100; i++) {
      newKey += KEY_INPUT[Math.floor(Math.random() * KEY_INPUT.length)];
    }
    return newKey;
  }
  encode(str: string): string {
    let encoded = "";
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const charIndex = KEY_INPUT.indexOf(char);
      if (charIndex === -1) {
        encoded += char;
      } else {
        encoded += this.key[charIndex];
      }
    }
    return encoded;
  }

  decode(str: string): string {
    let decoded = "";
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const charIndex = this.key.indexOf(char);
      if (charIndex === -1) {
        decoded += char;
      } else {
        decoded += KEY_INPUT[charIndex];
      }
    }
    return decoded;
  }
}
