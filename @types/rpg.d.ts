import { Character as C_Character } from "../src/lib/Character.ts";

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
}

export declare class Dice {
  protected nbFaces: number;
  constructor(nbFaces: number);
  roll(): number;
}

export declare class Dice20 extends Dice {
  constructor();
  rollAndCheck(threshold: number): boolean;
}

export declare const d4: Dice;
export declare const d6: Dice;
export declare const d10: Dice;
export declare const d12: Dice;
export declare const d20: Dice20;

export declare class Character {
  private name: string;
  private str: number;
  private dex: number;
  private con: number;
  private int: number;
  private wis: number;
  private cha: number;
}
