// @flow

import React from 'react'
import styled from 'styled-components'
import type { Match } from 'react-router-dom'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import GridColumn from 'components/Grid/GridColumn'
import GridSection from 'components/Grid/GridSection'
import H1 from 'components/Typography/H1'
import H4 from 'components/Typography/H4'
import LessonSection from './components/LessonSection'
import NextLesson from './components/NextLesson'

type LessonProps = {
  match: Match,
}

const GET_LESSON = gql`
  query GetLesson($id: String) {
    lesson(id: $id) {
      lessonTitle
      lessonShortFacts
      lessonShortFacts
      lessonIntro
      level
      objectives
      nextLesson {
        lessonId
        title
      }
      sections {
        sectionBody
        sectionTitle
        sectionImgAlt
        sectionImgUrl
        sectionFinishingText
        sectionSandbox
      }
    }
  }
`

const TopWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 20px;
`

const ObjectivesBox = styled.div`
  background-color: ${({ theme }) => theme.colors.downy};
  padding: ${({ theme }) => theme.sizes.medium};
`

const Objective = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const Lesson = ({ match }: LessonProps) => (
  <Query query={GET_LESSON} variables={{ id: match.params.lessonId }}>
    {({ data: { lesson }, error, loading }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      if (!lesson) return null

      return (
        <GridColumn>
          <GridSection>
            <TopWrap>
              <div>
                <H1>{lesson.lessonTitle}</H1>
                {lesson.lessonShortFacts && <p>{lesson.lessonShortFacts}</p>}
                <p>{lesson.lessonIntro}</p>
              </div>

              <ObjectivesBox>
                <H4>Du kommer lära dig:</H4>
                <ol>
                  {lesson.objectives.map((objective, i) => (
                    <Objective key={i}>{objective}</Objective>
                  ))}
                </ol>
              </ObjectivesBox>
            </TopWrap>

            {lesson.sections.map((s, i) => (
              <LessonSection key={i} {...s} />
            ))}
          </GridSection>

          <NextLesson level={lesson.level} nextLesson={lesson.nextLesson} />
        </GridColumn>
      )
    }}
  </Query>
)

export default Lesson
