// @flow

import React from 'react'
import styled from 'styled-components'
import GridSection from 'components/Grid/GridSection'
import ButtonLink from 'components/Button/ButtonLink'

type NextLessonProps = {
  difficultyLevel: string,
  nextLesson?: {
    lessonId: string,
    lessonTitle: string,
  },
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const NextLesson = ({ difficultyLevel, nextLesson }: NextLessonProps) => (
  <GridSection>
    <Wrap>
      {nextLesson ? (
        <>
          <strong>Nästa lektion: {nextLesson.lessonTitle}</strong>
          <ButtonLink to={`/lesson/${nextLesson.lessonId}`}>
            Fortsätt &gt;
          </ButtonLink>
        </>
      ) : (
        <>
          Bra jobbat, du är färdig! Tillbaka till översiktssidan
          <ButtonLink to={`/overview/${difficultyLevel}`}>Tillbaka</ButtonLink>
        </>
      )}
    </Wrap>
  </GridSection>
)

export default NextLesson
