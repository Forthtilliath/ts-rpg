import type { RPG } from "../@types/rpg.ts";
import { d6, d20 } from "./lib/Dice.ts";
import { Character } from "./lib/Character.ts";

const forth: RPG.Player = {
  name: "Forth",
  mail: "forth@forth.fr",
  avatar: "",
};

console.log(forth);

console.log(d20.roll());
console.log(d6.roll());

const wellby = new Character("Wellby");
console.log(wellby.toString());

console.log("5+: ", d20.rollAndCheck(5));
console.log("5+: ", d20.rollAndCheck(5));
console.log("15+: ", d20.rollAndCheck(15));
console.log("15+: ", d20.rollAndCheck(15));

const party: RPG.Party = {
  startDate: new Date(),
  endDate: new Date(),
  location: "Nowhere",
  organizer: forth,
  players: new Map([[forth, wellby]]),
};

console.log(party)