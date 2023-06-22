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
    players: Map<Player, Character>;
  };
}

export declare class Dice {
  nbFaces: number;
  constructor(nbFaces: number);
  roll(): number;
}

export declare class Dice20 extends Dice {
  constructor();
  rollAndCheck(threshold: number):boolean
}

export declare const d4: Dice;
export declare const d6: Dice;
export declare const d10: Dice;
export declare const d12: Dice;
export declare const d20: Dice20;

export type Stats = {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
};

export declare class Character {
  name: string;
  stats: Stats;
}
