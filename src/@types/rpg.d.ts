import { SKILL, STAT } from '@/lib/constants'

export type Character = {
  lvl: number
  strBase: number
  dexBase: number
  conBase: number
  intBase: number
  wisBase: number
  chaBase: number
  currExpPoints: number
  skills: SkillMastery[]
  miscProficiencies: Record<string, string>
  name: string
  alignment: string
  background: string
  personnalityTraits: string[]
  ideals: string[]
  bonds: string[]
  flaws: string[]
}

export type Player = {
  name: string
  mail: string
  avatar: string
}

export type Party = {
  startDate: Date
  endDate: Date
  location: string
  organizer: Player
  players: Map<Player, Character>
  game: Game
}

export type Game = {
  name: string
  editor: string
  author: string
}

export type Skill = {
  label: string
  stat: STAT
}

export type SkillMastery = Skill & {
  training: boolean
}

export type SkillLabel = (typeof SKILL)[keyof typeof SKILL]['label']

export type StatKey = `${Lowercase<keyof typeof STAT>}Base`
