import Character_ from "./Character.ts";
import Die_, { d4, d6, d8, d10, d12, d20 } from "./Dice.ts";

export namespace Game {
  export const Character = Character_;
  export const Die = Die_;
  export const Dice = { d4, d6, d8, d10, d12, d20 };
}
