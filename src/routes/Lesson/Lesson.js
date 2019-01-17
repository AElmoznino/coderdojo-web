// @flow

import React from 'react'
import styled from 'styled-components'
import type { Match } from 'react-router-dom'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import ReactMarkdown from 'react-markdown'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import GridColumn from 'components/Grid/GridColumn'
import GridSection from 'components/Grid/GridSection'
import H1 from 'components/Typography/H1'
import H4 from 'components/Typography/H4'
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator'
import NextLesson from './components/NextLesson'

type LessonProps = {
  match: Match,
}

const GET_LESSON = gql`
  query GetLesson($lesson: String) {
    lesson(where: { lessonId: $lesson }) {
      difficultyLevel
      lessonBody
      lessonIntro
      lessonObjectives
      lessonShortFacts
      lessonTitle
      nextLesson {
        lessonId
        lessonTitle
      }
      references
    }
  }
`

const TopWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 20px;
`

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.downy};
  padding: ${({ theme }) => theme.sizes.medium};
`

export const Lesson = ({ match }: LessonProps) => (
  <Query query={GET_LESSON} variables={{ lesson: match.params.lessonId }}>
    {({ data: { lesson }, error, loading }) => {
      if (loading) return <LoadingIndicator />
      if (error) return <ErrorMessage />
      if (!lesson) return null

      return (
        <GridColumn wide>
          <GridSection>
            <TopWrap>
              <div>
                <H1>{lesson.lessonTitle}</H1>
                {lesson.lessonShortFacts && <p>{lesson.lessonShortFacts}</p>}
                <ReactMarkdown>{lesson.lessonIntro}</ReactMarkdown>
              </div>

              <Box>
                <H4>Du kommer lära dig:</H4>
                <ReactMarkdown>{lesson.lessonObjectives}</ReactMarkdown>
              </Box>
            </TopWrap>

            <ReactMarkdown escapeHtml={false}>
              {lesson.lessonBody}
            </ReactMarkdown>

            {lesson.references && (
              <Box>
                <ReactMarkdown escapeHtml={false}>
                  {lesson.references}
                </ReactMarkdown>
              </Box>
            )}
          </GridSection>

          <NextLesson
            difficultyLevel={lesson.difficultyLevel}
            nextLesson={lesson.nextLesson}
          />
        </GridColumn>
      )
    }}
  </Query>
)

export default Lesson
