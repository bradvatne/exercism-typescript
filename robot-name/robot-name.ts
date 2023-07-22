export class Robot {
  static usedNames = new Set();
  name = this.generateRandomName();

  private static alphabet = "abcdefghijklmnopqrstuvwxyz";
  private static LETTERS_LENGTH = 2;
  private static NUMEBRS_LENGTH = 3;

  constructor() {}

  private randomCharacter(): string {
    return Robot.alphabet[
      Math.floor(Math.random() * Robot.alphabet.length)
    ].toUpperCase();
  }

  private randomNumber(): string {
    return Math.floor(Math.random() * 10).toString();
  }
  private generateRandomName(): string {
    let name = "";
    for (let i = 0; i < Robot.LETTERS_LENGTH; i++) {
      name += this.randomCharacter();
    }
    for (let j = 0; j < Robot.NUMEBRS_LENGTH; j++) {
      name += this.randomNumber();
    }
    if (Robot.usedNames.has(name)) {
      return this.generateRandomName();
    } else {
      Robot.usedNames.add(name);
      return name;
    }
  }

  public resetName(): void {
    this.name = this.generateRandomName();
  }

  public static releaseNames(): void {
    Robot.usedNames = new Set();
  }
}
