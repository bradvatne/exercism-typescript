export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;
  
  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }
  
  private static diceRoll(): number {
    return Math.floor(Math.random()*6) +1;
  }
  
  public static generateAbilityScore(): number {
    let rolls = []
    let lowest = 7;
    for (let i =0; i < 4; i++) {
      let newVal = DnDCharacter.diceRoll();
      if (newVal < lowest) lowest = newVal
      rolls.push(newVal)
    }
    rolls.splice(rolls.indexOf(lowest), 1); // remove the lowest roll
    const res = rolls.reduce((a,b) => a+b);
    return res;
  }

  public static getModifierFor(abilityValue: number): number {
     return Math.floor((abilityValue - 10) / 2);
  }
}

