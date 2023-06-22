import { dedent } from "../shared/string.ts";
import { d6 } from "./Dice.ts";

const STATS = ["str", "dex", "con", "int", "wis", "cha"] as const;

export class Character {
  private name: string;
  
  str!: number;
  dex!: number;
  con!: number;
  int!: number;
  wis!: number;
  cha!: number;

  constructor(name: string) {
    this.name = name;

    STATS.forEach((stat) => {
      this[stat] = d6.roll() + d6.roll() + d6.roll();
    });
  }

  toString() {
    return dedent`Character: ${this.name}
    Stats:
    - STR: ${this.str}
    - DEX: ${this.dex}
    - CON: ${this.con}
    - INT: ${this.int}
    - WIS: ${this.wis}
    - CHA: ${this.cha}`
  }
}
