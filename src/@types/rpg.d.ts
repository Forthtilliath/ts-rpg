import { Character as C_Character } from "../lib/Character.ts";
import { STATS } from "../lib/constants.ts";

export namespace RPG {
  type Player = {
    name: string;
    mail: string;
    avatar: string;
  };

  type Party = {
    startDate: Date;
    endDate: Date;
    location: string;
    organizer: Player;
    // Attention ici, il faut bien que ce soit la classe et non le type
    // Sinon ca bloque au niveau de la création de l'objet
    players: Map<Player, C_Character>;
  };

  type Stat = (typeof STATS)[number];
  type StatRace = Stat | "other1" | "other2";

  type Skill = Record<string, Stat>;

  type Race = Record<
    string,
    {
      ability: Partial<Record<StatRace, number>>;
      // ability: Record<Partial<Stat>, number>;
    }
  >;
}
