'use client'

import {
  Attacks,
  Equipments,
  Features,
  Fluffs,
  Header,
  Proficiencies,
  Skills,
  Stats,
  Values,
} from '@/components/layout'

export default function Home() {
  return (
    <main>
      <Header />
      <Proficiencies />
      <Equipments />
      <Attacks />
      <Features />
      <Fluffs />
      <Values />
      <Stats />
      <Skills />
    </main>
  )
}
