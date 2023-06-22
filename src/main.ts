import type { RPG } from "../@types/rpg.ts";
import { Game } from "./lib/index.ts";

const forth: RPG.Player = {
  name: "Forth",
  mail: "forth@forth.fr",
  avatar: "",
};

console.log(forth);

console.log(Game.Dice.d20.roll());
console.log(Game.Dice.d6.roll());

const wellby = new Game.Character("Wellby");
console.log(wellby.toString());

console.log("5+: ", Game.Dice.d20.rollAndCheck(5));
console.log("5+: ", Game.Dice.d20.rollAndCheck(5));
console.log("15+: ", Game.Dice.d20.rollAndCheck(15));
console.log("15+: ", Game.Dice.d20.rollAndCheck(15));

const party: RPG.Party = {
  startDate: new Date(),
  endDate: new Date(),
  location: "Nowhere",
  organizer: forth,
  players: new Map([[forth, wellby]]),
};

console.log(party)