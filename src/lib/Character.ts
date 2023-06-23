import type { RPG } from "../@types/rpg.js";
import { sum } from "../shared/number.ts";
import { contantKeyToString, dedent } from "../shared/string.ts";
import { Dice, d6 } from "./Dice.ts";
import { RACE, STATS } from "./constants.ts";

export class Character {
  private name: string;
  private race = "";

  private stats = {
    str: 0,
    dex: 0,
    con: 0,
    wis: 0,
    int: 0,
    cha: 0,
  };

  constructor(props: RPG.CharacterProps) {
    this.name = props.name;

    // Si une des stats ne correspond pas à un attribut => erreur
    STATS.forEach((stat) => {
      // Le + est là seulement pour avoir le choix de où placer le setRace()
      this.stats[stat] += this.rollDiceToInitiateStat();
    });
    console.log(...Object.entries(this.stats));

    this.setRace(props.race);
    console.log(...Object.entries(this.stats));
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

  private setRace(raceKey: RPG.RaceKey) {
    this.race = contantKeyToString(raceKey);

    const abilityBonus = Object.entries(RACE[raceKey].ability) as [
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
  }
}
