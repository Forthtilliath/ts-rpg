import type { RPG } from "../@types/rpg.js";

export const STATS = ["str", "dex", "con", "int", "wis", "cha"] as const;

export const DIFFICULTY = {
  VERY_EASY: 0,
  EASY: 5,
  MEDIUM: 10,
  TRICKY: 15,
  HARD: 20,
  VERY_HARD: 25,
  HEROIC: 30,
  ALMOST_IMPOSSIBLE: 40,
} as const;

export const SKILL: RPG.Skill = {
  ACROBATICS: "dex",
  ANIMAL_HANDLING: "wis",
  ARCANA: "int",
  ATHLETICS: "str",
  DECEPTION: "cha",
  HISTORY: "int",
  INSIGHT: "wis",
  INITIMIDATION: "cha",
  MEDECINE: "wis",
  NATURE: "int",
  PERCEPTION: "wis",
  PERFORMANCE: "cha",
  PERSUASION: "cha",
  RELIGION: "int",
  SLEIGHT_OF_HAND: "dex",
  STEALTH: "dex",
  SURVIVAL: "wis",
} as const;

// https://www.aidedd.org/en/rules/races/half-orc/
export const RACE = {
  DWARF: {
    ability: { con: +2 },
  },
  ELF: {
    ability: { dex: +2 },
  },
  HALFLING: {
    ability: { dex: +2 },
  },
  HUMAN: {
    ability: { str: +1, dex: +1, con: +1, wis: +1, int: +1, cha: +1 },
  },
  DRAGONBORN: {
    ability: { str: +2, cha: +1 },
  },
  GNOME: {
    ability: { int: +2 },
  },
  HALF_ELF: {
    ability: { cha: +2, other1: +1, other2: +1 },
  },
  HALF_ORC: {
    ability: { str: +2, con: +1 },
  },
  TIEFLING: {
    ability: { int: +1, cha: +2 },
  },
} as const satisfies RPG.Race;
