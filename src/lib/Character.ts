import type { RPG } from "../@types/rpg.js";
import { sum } from "../shared/number.ts";
import { contantKeyToString, dedent } from "../shared/string.ts";
import { Dice, d6 } from "./Dice.ts";
import { RACE, STATS } from "./constants.ts";

export class Character {
  private name: string;
  private race: string;

  // J'assure que l'attribut aura une valeur via le !
  private stats = {
    str: 0,
    dex: 0,
    con: 0,
    wis: 0,
    int: 0,
    cha: 0,
  };

  constructor(name: string) {
    this.name = name;

    const races = Object.entries(RACE);
    const race = races[Dice.roll(races.length) - 1];
    this.race = contantKeyToString(race[0]);

    // Si une des stats ne correspond pas à un attribut => erreur
    STATS.forEach((stat) => {
      this.stats[stat] = this.rollDiceToInitiateStat();
    });
    console.log(...Object.entries(this.stats))

    const abilityBonus = Object.entries(race[1].ability) as [
      RPG.StatRace,
      number
    ][];
    abilityBonus.forEach(([stat, bonus]) => {
      if (stat === "other1" || stat === "other2") {
        const randomStat = STATS[Dice.roll(STATS.length) - 1];
        this.stats[randomStat] += bonus;
      } else {
        this.stats[stat] += bonus;
      }
    });
    console.log(...Object.entries(this.stats))

    this.rollDiceToInitiateStat();
  }

  public toString() {
    return dedent`Character: ${this.name}
    Race: ${this.race}
    Stats:
    - STR: ${this.stats.str}
    - DEX: ${this.stats.dex}
    - CON: ${this.stats.con}
    - INT: ${this.stats.int}
    - WIS: ${this.stats.wis}
    - CHA: ${this.stats.cha}`;
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
