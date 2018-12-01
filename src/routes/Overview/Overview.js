// @flow

import React from 'react'
import styled from 'styled-components'
import GridColumn from '../../components/Grid/GridColumn'
import GridSection from '../../components/Grid/GridSection'
import H1 from '../../components/Typography/H1'
import OverviewLesson from './OverviewLesson'
import type { Match } from 'react-router-dom'

type OverviewProps = {
  match: Match,
}

const LessonsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-column-gap: ${({ theme }) => theme.sizes.medium};
`

const lessons = [
  {
    lessonNumber: 1,
    image: {
      alt: 'HTML för nybörjare, del 1',
      url: 'https://placeimg.com/180/180/tech',
    },
    text: 'Här får du lära dig grunderna i HTML',
  },
  {
    lessonNumber: 2,
    image: {
      alt: 'HTML för nybörjare, del 2',
      url: 'https://placeimg.com/180/180/tech',
    },
    text: 'Här får du lära dig mer om HTML',
  },
  {
    lessonNumber: 3,
    image: {
      alt: 'CSS för nybörjare',
      url: 'https://placeimg.com/180/180/tech',
    },
    text: 'Här får du lära dig grunderna i CSS',
  },
  {
    lessonNumber: 4,
    image: {
      alt: 'CSS för nybörjare',
      url: 'https://placeimg.com/180/180/tech',
    },
    text: 'Här får du lära dig mer om CSS',
  },
]

const Overview = ({ match }: OverviewProps) => {
  return (
    <GridColumn>
      <GridSection>
        <H1>Översikt av {match.params.level}</H1>
        <p>
          Har du aldrig kodat förrut? Då börjar du här och får en introduktion
          till hur man strukturerar upp hemsidor med HTML och snyggar till dem
          med CSS.
        </p>
        <LessonsWrap>
          {lessons.map(lesson => (
            <OverviewLesson key={lesson.lessonNumber} {...lesson} />
          ))}
        </LessonsWrap>
      </GridSection>
    </GridColumn>
  )
}

export default Overview
