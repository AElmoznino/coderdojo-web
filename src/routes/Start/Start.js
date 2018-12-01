// @flow

import React from 'react'
import GridColumn from '../../components/Grid/GridColumn'
import H1 from '../../components/Typography/H1'
import StartSection from './components/StartSection'

const classes = [
  {
    link: '/overview/nybörjare',
    title: 'Nybörjare',
    text: `Har du aldrig kodat förrut? Då börjar du här och får en introduktion
          till hur man strukturerar upp hemsidor med HTML och snyggar till dem
          med CSS.`,
  },
  {
    link: '/overview/fortsättning',
    title: 'Fortsättning',
    text: `Har du redan prövat lite skriven programmering (dvs inte code.org eller Scratch)
    så är det här du fortsätter. Du får pröva på Testdriven utveckling och att ändra dina
    hemsidor med JavaScript`,
  },
]

export const Start = () => (
  <GridColumn>
    {classes.map(c => (
      <StartSection key={c.title} link={c.link} text={c.text} title={c.title} />
    ))}
  </GridColumn>
)

export default Start
