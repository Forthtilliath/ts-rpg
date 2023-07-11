import type { Character } from '@/@types/rpg'

export class Die {
  nbFaces: number

  constructor(faces: number) {
    this.nbFaces = faces
  }

  roll() {
    return Math.floor(Math.random() * this.nbFaces) + 1
  }
}

export const defaultCharacter = {
  lvl: 1,
  currExpPoints: 0,
  // race: string
  // class: string

  strBase: 10,
  dexBase: 10,
  conBase: 10,
  intBase: 10,
  wisBase: 10,
  chaBase: 10,

  skills: [],
  miscProficiencies: {
    Language: ' Common',
    Weapons: ' Common',
  },

  name: 'Noname',
  alignment: 'Neutral',
  background: 'None',
  personnalityTraits: [],
  ideals: [],
  bonds: [],
  flaws: [],

  // skill(name: string) {
  //   let res = 0
  //   const skill = this.skills.find((elt) => elt.label === name)
  //   if (!skill) return 0

  //   switch (skill.stat) {
  //     case STAT.STR:
  //       res += this.str()
  //       break
  //     case STAT.DEX:
  //       res += this.dex()
  //       break
  //     case STAT.CON:
  //       res += this.con()
  //       break
  //     case STAT.INT:
  //       res += this.int()
  //       break
  //     case STAT.WIS:
  //       res += this.wis()
  //       break
  //     case STAT.CHA:
  //       res += this.cha()
  //       break
  //   }

  //   if (skill.training) res += this.proficiencyScore()

  //   return res
  // }
  // hasMiscProficiency(name: string) {
  //   return this.miscProficiencies.includes(name)
  // }

  // rollAdvantage() {
  //   const result1 = this.roll()
  //   const result2 = this.roll()

  //   if (result1 === true || result2 === true) return true
  //   if (result1 === false && result2 === false) return false
  //   if (result1 === false) return result2
  //   if (result2 === false) return result1

  //   return Math.max(result1, result2)
  // }
  // rollDisadvantage() {
  //   const result1 = this.roll()
  //   const result2 = this.roll()

  //   if (result1 === false || result2 === false) return false
  //   if (result1 === true && result2 === true) return true
  //   if (result1 === true) return result2
  //   if (result2 === true) return result1

  //   return Math.min(result1, result2)
  // }
} satisfies Character
