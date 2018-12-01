// @flow

import React from 'react'
import type { Match } from 'react-router-dom'
import GridColumn from '../../components/Grid/GridColumn'
import GridSection from '../../components/Grid/GridSection'

type LessonProps = {
  match: Match,
}

export const Lesson = ({ match }: LessonProps) => (
  <GridColumn>
    <GridSection>Lesson</GridSection>
  </GridColumn>
)

export default Lesson
