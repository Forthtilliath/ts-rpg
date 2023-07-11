import type { Character, SkillLabel, StatKey } from '@/@types/rpg'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Die, defaultCharacter } from '@/lib/rpg'
import { ROLL, SKILL } from '@/lib/constants'
import { formatStatNameToStatBase } from '@/services/utilities/string'

interface CharacterState {
  character: Character
  actions: {
    replace: (by: Partial<Character>) => void
    // str: () => number
    // con: () => number
    // dex: () => number
    // int: () => number
    // wis: () => number
    // cha: () => number
    mod: (stat: StatKey) => number
    proficiencyScore: () => number
    save: (stat: StatKey, therehold: number) => boolean
    roll: () => number
    rollLucky: () => number
    rollUnlucky: () => number
    skill: (name: SkillLabel) => number
  }
}

const forth = {
  name: 'Forth',
  skills: [
    { ...SKILL.PERFORMANCE, training: true },
    { ...SKILL.INVESTIGATION, training: true },
  ],
} satisfies Partial<Character>

export const useCharacterStore = create<CharacterState>()(
  devtools(
    persist(
      (set, get) => ({
        character: Object.assign(defaultCharacter, forth),

        actions: {
          replace: (by) => {
            set((state) => ({ character: Object.assign(state.character, by) }))
          },

          // str: () => get().character.strBase,
          // con: () => get().character.conBase,
          // dex: () => get().character.dexBase,
          // int: () => get().character.intBase,
          // wis: () => get().character.wisBase,
          // cha: () => get().character.chaBase,

          mod: (stat) => Math.floor((get().character[stat] - 10) / 2),

          proficiencyScore: () => {
            return Math.floor((get().character.lvl - 1) / 4) + 2
          },

          save: (stat, therehold) => {
            const d20 = new Die(20)
            const result = d20.roll() + get().actions.mod(stat)

            return result >= therehold
          },

          roll: () => {
            const d20 = new Die(20)
            const result = d20.roll()

            switch (result) {
              case 1:
                return ROLL.FAIL
              case 20:
                return ROLL.SUCCESS
              default:
                return result
            }
          },

          rollLucky: () => {
            const results = [get().actions.roll(), get().actions.roll()]

            return Math.max(...results)
          },

          rollUnlucky: () => {
            const results = [get().actions.roll(), get().actions.roll()]

            return Math.min(...results)
          },

          skill: (name) => {
            const skill = get().character.skills.find((s) => s.label === name)!

            return get().actions.mod(formatStatNameToStatBase(skill.stat))
          },
        },
      }),

      {
        name: 'character',
        partialize: (state) => ({ character: state.character }),
      }
    )
  )
)

useCharacterStore.subscribe(console.log)
useCharacterStore.persist.rehydrate()
