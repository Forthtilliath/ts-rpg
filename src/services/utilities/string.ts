import { StatKey } from '@/@types/rpg'
import { STAT } from '@/lib/constants'

export function formatStatNameToStatBase(stat: keyof typeof STAT) {
  return (stat.toLowerCase() + 'Base') as StatKey
}
