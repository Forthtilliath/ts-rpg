export class Dice {
  protected nbFaces: number;

  constructor(nbFaces: number) {
    this.nbFaces = nbFaces;
  }

  public roll() {
    return Math.floor(Math.random() * this.nbFaces) + 1;
  }

  static roll(n: number) {
    return Math.floor(Math.random() * n) + 1;
  }
}

export class Dice20 extends Dice {
  constructor() {
    super(20);
  }

  rollAndCheck(threshold: number) {
    const res = this.roll();

    if (this.nbFaces === 20) {
      if (res === 1) return false;
      if (res === 20) return true;
    }

    return res >= threshold;
  }
}

// Je déclare les dés directement ici, ca évite d'avoir x
// instances pour un dé ayant le même nombre de faces
export const d4 = new Dice(4);
export const d6 = new Dice(6);
export const d10 = new Dice(10);
export const d12 = new Dice(12);
export const d20 = new Dice20();
