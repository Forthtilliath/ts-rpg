import type { RPG } from "./@types/rpg.js";
import { Character } from "./lib/Character.ts";

const forth: RPG.Player = {
  name: "Forth",
  mail: "forth@forth.fr",
  avatar: "",
};
const william: RPG.Player = {
  name: "William",
  mail: "william@william.fr",
  avatar: "",
};

const wellby = new Character({ name: "Wellby", race: "HALFLING" });
const williamhod = new Character({ name: "Williamhod", race: "HUMAN" });

const party: RPG.Party = {
  startDate: new Date(),
  endDate: new Date(),
  location: "Nowhere",
  organizer: forth,
  players: new Map([
    [forth, wellby],
    [william, williamhod],
  ]),
};

console.log(party);
console.log(party.players.get(forth));
console.log(party.players.get(william));
