// @flow

import React from 'react'
import styled from 'styled-components'
import GridSection from 'components/Grid/GridSection'
import ButtonLink from 'components/Button/ButtonLink'

type NextLessonProps = {
  level: string,
  nextLesson?: {
    lessonId: string,
    title: string,
  },
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const NextLesson = ({ level, nextLesson }: NextLessonProps) => (
  <GridSection>
    <Wrap>
      {nextLesson ? (
        <>
          <strong>Nästa lektion: {nextLesson.title}</strong>
          <ButtonLink to={`/lesson/${nextLesson.lessonId}`}>
            Fortsätt &gt;
          </ButtonLink>
        </>
      ) : (
        <>
          Bra jobbat, du är färdig! Tillbaka till översiktssidan för {level}
          <ButtonLink to={`/overview/${level}`}>Tillbaka</ButtonLink>
        </>
      )}
    </Wrap>
  </GridSection>
)

export default NextLesson
