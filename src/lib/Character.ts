import { sum } from "../shared/number.ts";
import { dedent } from "../shared/string.ts";
import { d6 } from "./Dice.ts";

const STATS = ["str", "dex", "con", "int", "wis", "cha"] as const;

export class Character {
  private name: string;

  // J'assure que l'attribut aura une valeur via le !
  private str!: number;
  private dex!: number;
  private con!: number;
  private int!: number;
  private wis!: number;
  private cha!: number;

  constructor(name: string) {
    this.name = name;

    // Si une des stats ne correspond pas à un attribut => erreur
    STATS.forEach((stat) => {
      this[stat] = this.rollDiceToInitiateStat();
      // this[stat] = d6.roll() + d6.roll() + d6.roll();
    });

    this.rollDiceToInitiateStat();
  }

  public toString() {
    return dedent`Character: ${this.name}
    Stats:
    - STR: ${this.str}
    - DEX: ${this.dex}
    - CON: ${this.con}
    - INT: ${this.int}
    - WIS: ${this.wis}
    - CHA: ${this.cha}`;
  }

  private rollDiceToInitiateStat() {
    const dice = Array(4)
      .fill(0)
      .map(() => d6.roll())
      .sort((a, b) => b - a);
    dice.length = 3;

    return sum(dice);
  }
}
