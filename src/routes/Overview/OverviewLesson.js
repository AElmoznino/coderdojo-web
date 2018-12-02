// @flow

import React from 'react'
import styled from 'styled-components'
import ButtonLink from 'components/Button/ButtonLink'
import H4 from 'components/Typography/H4'

type OverviewLessonProps = {
  image: {
    alt: string,
    url: string,
  },
  lessonId: number,
  lessonNumber: number,
  text: string,
}

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({
    theme: {
      sizes: { medium, third },
    },
  }) => `${third} ${third} ${medium}`};
`

export const OverviewLesson = ({
  lessonId,
  lessonNumber,
  image,
  text,
}: OverviewLessonProps) => (
  <Wrap>
    <H4>Lektion {lessonNumber}</H4>
    <img alt={image.alt} src={image.url} />
    <p>{text}</p>
    <ButtonLink to={`/lesson/${lessonId}`}>Kom igång</ButtonLink>
  </Wrap>
)

export default OverviewLesson
