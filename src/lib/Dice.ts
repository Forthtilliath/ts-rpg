export default class Die {
  protected nbFaces: number;

  constructor(nbFaces: number) {
    this.nbFaces = nbFaces;
  }

  roll() {
    return Math.floor(Math.random() * this.nbFaces) + 1;
  }
}

export class Die20 extends Die {
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
export const d4 = new Die(4);
export const d6 = new Die(6);
export const d8 = new Die(8);
export const d10 = new Die(10);
export const d12 = new Die(12);
export const d20 = new Die20();
