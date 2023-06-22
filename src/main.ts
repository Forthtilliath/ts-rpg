import type { RPG } from "../@types/rpg.ts";
import { Character } from "./lib/Character.ts";

const forth: RPG.Player = {
  name: "Forth",
  mail: "forth@forth.fr",
  avatar: "",
};

const wellby = new Character("Wellby");

const party: RPG.Party = {
  startDate: new Date(),
  endDate: new Date(),
  location: "Nowhere",
  organizer: forth,
  players: new Map([[forth, wellby]]),
};

console.log(party);
