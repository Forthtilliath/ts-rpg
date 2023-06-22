import { dedent } from "../shared/string.ts";
import { d6 } from "./Dice.ts";

const STATS = ["str", "dex", "con", "int", "wis", "cha"] as const;

export default class Character {
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
    - CHA: ${this.cha}`;
  }
}
