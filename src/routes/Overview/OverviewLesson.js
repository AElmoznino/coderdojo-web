// @flow

import React from 'react'
import styled from 'styled-components'
import ButtonLink from 'components/Button/ButtonLink'
import H4 from 'components/Typography/H4'

type OverviewLessonProps = {
  lessonId: number,
  lessonNumber: number,
  lessonShortFacts: string,
  lessonTitle: string,
}

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.wildSand};
  padding: ${({
    theme: {
      sizes: { medium, third },
    },
  }) => `${third} ${third} ${medium}`};
`

export const OverviewLesson = ({
  lessonId,
  lessonNumber,
  lessonShortFacts,
  lessonTitle,
}: OverviewLessonProps) => (
  <Wrap>
    <H4>Lektion {lessonNumber}</H4>
    <img alt={lessonTitle} src="https://placeimg.com/180/180/tech" />
    <p>{lessonShortFacts}</p>
    <ButtonLink to={`/lesson/${lessonId}`}>Kom igång</ButtonLink>
  </Wrap>
)

export default OverviewLesson
