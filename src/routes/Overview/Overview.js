// @flow

import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import type { Match } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import GridColumn from 'components/Grid/GridColumn'
import GridSection from 'components/Grid/GridSection'
import H1 from 'components/Typography/H1'
import H2 from 'components/Typography/H2'
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator'
import OverviewLesson from './OverviewLesson'

type OverviewProps = {
  match: Match,
}

const CourseWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 ${({ theme }) => theme.sizes.medium} rgba(67, 73, 89, 0.1);
  padding: ${({ theme }) => theme.sizes.third};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.sizes.base};
  }
`

const LessonsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-column-gap: ${({ theme }) => theme.sizes.medium};
`

const GET_OVERVIEW = gql`
  query getOverview($level: String) {
    difficulty(where: { difficultyId: $level }) {
      difficultyName
      difficultyId
      difficultyOverviewDescription
      difficultyDescription
      courses {
        courseDescription
        courseId
        courseName
        lessons {
          lessonId
          lessonShortFacts
          lessonTitle
        }
      }
    }
  }
`

const Overview = ({ match }: OverviewProps) => {
  return (
    <Query query={GET_OVERVIEW} variables={{ level: match.params.level }}>
      {({ data: { difficulty }, error, loading }) => {
        if (loading) return <LoadingIndicator />
        if (error) return <ErrorMessage />
        if (!difficulty) return null

        return (
          <GridColumn>
            <GridSection>
              <H1>Översikt av {difficulty.difficultyName}</H1>
              <ReactMarkdown>
                {difficulty.difficultyOverviewDescription}
              </ReactMarkdown>
              {difficulty.courses.map(course => (
                <CourseWrap key={course.courseId}>
                  <H2>{course.courseName}</H2>
                  <ReactMarkdown>{course.courseDescription}</ReactMarkdown>
                  <LessonsWrap>
                    {course.lessons.map((lesson, i) => (
                      <OverviewLesson
                        key={lesson.lessonId}
                        lessonNumber={i + 1}
                        {...lesson}
                      />
                    ))}
                  </LessonsWrap>
                </CourseWrap>
              ))}
            </GridSection>
          </GridColumn>
        )
      }}
    </Query>
  )
}

export default Overview
