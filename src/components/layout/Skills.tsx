import type { SkillLabel } from '@/@types/rpg'
import { numberWithSignFormatter } from '@/lib/formatters'
import { useCharacterStore } from '@/services/zustand/store'

export default function Skills() {
  const { character, actions } = useCharacterStore((state) => state)

  return (
    <div className="Skills">
      <h2>Skills</h2>
      {character.skills.map((elt) => {
        return (
          <p key={elt.label}>
            <input type="checkbox" disabled checked={elt.training} />
            {numberWithSignFormatter.format(
              actions.skill(elt.label as SkillLabel)
            )}{' '}
            {elt.label} ({elt.stat})
          </p>
        )
      })}
    </div>
  )
}
