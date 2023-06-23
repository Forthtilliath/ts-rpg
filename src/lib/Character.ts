import type { RPG } from "../@types/rpg.js";
import { sum } from "../shared/number.ts";
import { contantKeyToString, dedent } from "../shared/string.ts";
import { Dice, d6 } from "./Dice.ts";
import { RACE, STATS } from "./constants.ts";

export class Character {
  private name: string;
  private race: string;

  // J'assure que l'attribut aura une valeur via le !
  private str!: number;
  private dex!: number;
  private con!: number;
  private int!: number;
  private wis!: number;
  private cha!: number;

  constructor(name: string) {
    this.name = name;

    const races = Object.entries(RACE);
    const race = races[Dice.roll(races.length) - 1];
    this.race = contantKeyToString(race[0]);
    console.log(race[1]);

    // Si une des stats ne correspond pas à un attribut => erreur
    STATS.forEach((stat) => {
      this[stat] = this.rollDiceToInitiateStat();
    });
    
    const abilityBonus = Object.entries(race[1].ability) as [
      RPG.StatRace,
      number
    ][];
    abilityBonus.forEach(([stat, bonus]) => {
      if (stat === "other1" || stat === "other2") {
        const randomStat = STATS[Dice.roll(STATS.length) - 1];
        this[randomStat] += bonus;
      } else {
        this[stat] += bonus;
      }
    });

    this.rollDiceToInitiateStat();
  }

  public toString() {
    return dedent`Character: ${this.name}
    Race: ${this.race}
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
