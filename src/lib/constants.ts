import type { Skill } from '@/@types/rpg'

export enum STAT {
  STR = 'STR',
  DEX = 'DEX',
  CON = 'CON',
  INT = 'INT',
  WIS = 'WIS',
  CHA = 'CHA',
}

export const SKILL = {
  ACROBATIC: { label: 'Acrobatics', stat: STAT.DEX },
  ANIMAL_HANDLING: { label: 'Animal Handling', stat: STAT.WIS },
  ARCANA: { label: 'Arcana', stat: STAT.INT },
  ATHLETICS: { label: 'Athletics', stat: STAT.STR },
  DECEPTION: { label: 'Deception', stat: STAT.CHA },
  HISTORY: { label: 'History', stat: STAT.INT },
  INSIGHT: { label: 'Insight', stat: STAT.WIS },
  INTIMIDATION: { label: 'Intimidation', stat: STAT.CHA },
  INVESTIGATION: { label: 'Investigation', stat: STAT.WIS },
  MEDICINE: { label: 'Medicine', stat: STAT.WIS },
  NATURE: { label: 'Nature', stat: STAT.INT },
  PERCEPTION: { label: 'Perception', stat: STAT.WIS },
  PERFORMANCE: { label: 'Performance', stat: STAT.CHA },
  PERSUASION: { label: 'Persuasion', stat: STAT.CHA },
  RELIGION: { label: 'Religion', stat: STAT.INT },
  SLEIGHT_OF_HAND: { label: 'Sleight of Hand', stat: STAT.DEX },
  STEALTH: { label: 'Stealth', stat: STAT.DEX },
  SURVIVAL: { label: 'Survival', stat: STAT.WIS },
} as const satisfies Record<string, Skill>

export const ROLL = {
  FAIL: -1,
  SUCCESS: 100,
}
