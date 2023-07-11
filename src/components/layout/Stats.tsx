import { useCharacterStore } from '@/services/zustand/store'
import { ChangeEvent } from 'react'
import { LabelStat } from '../LabelStat'

export default function Stats() {
  const { character, actions } = useCharacterStore((state) => state)

  const hChange = (evt: ChangeEvent<HTMLInputElement>) => {
    actions.replace({ [evt.target.name]: evt.target.valueAsNumber })
  }

  if (!character) return null

  return (
    <div className="Stats">
      <h2>Stats</h2>
      <LabelStat label="STR" name="strBase" onChange={hChange} />
      <LabelStat label="DEX" name="dexBase" onChange={hChange} />
      <LabelStat label="CON" name="conBase" onChange={hChange} />
      <LabelStat label="INT" name="intBase" onChange={hChange} />
      <LabelStat label="WIS" name="wisBase" onChange={hChange} />
      <LabelStat label="CHA" name="chaBase" onChange={hChange} />
    </div>
  )
}
