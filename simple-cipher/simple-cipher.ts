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
  encode(/* Parameters go here */) {}

  decode(/* Parameters go here */) {
    throw new Error("Remove this statement and implement this function");
  }
}
