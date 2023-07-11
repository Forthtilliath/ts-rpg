import type { StatKey } from '@/@types/rpg'
import { numberWithSignFormatter } from '@/services/utilities/formatters'
import { useCharacterStore } from '@/services/zustand/store'

type Props = {
  label: string
  name: StatKey
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export function LabelStat({ label, name, onChange }: Props) {
  const { character, actions } = useCharacterStore((state) => state)

  return (
    <label>
      {label}:
      <input
        type="number"
        name={name}
        value={character[name]}
        onChange={onChange}
      />
      ({numberWithSignFormatter.format(actions.mod(name))})
    </label>
  )
}
