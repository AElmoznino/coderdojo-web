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
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator'
import OverviewLesson from './OverviewLesson'

type OverviewProps = {
  match: Match,
}

const LessonsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-column-gap: ${({ theme }) => theme.sizes.medium};
`

const GET_OVERVIEW = gql`
  query getOverview($level: String) {
    overview(level: $level) {
      description
      lessons {
        lessonId
        image {
          alt
          url
        }
        text
        title
      }
    }
  }
`

const Overview = ({ match }: OverviewProps) => {
  return (
    <Query query={GET_OVERVIEW} variables={{ level: match.params.level }}>
      {({ data: { overview }, error, loading }) => {
        if (loading) return <LoadingIndicator />
        if (error) return <ErrorMessage />
        if (!overview) return null

        return (
          <GridColumn>
            <GridSection>
              <H1>Översikt av {match.params.level}</H1>
              <ReactMarkdown>{overview.description}</ReactMarkdown>
              <LessonsWrap>
                {overview.lessons.map((lesson, i) => (
                  <OverviewLesson
                    key={lesson.lessonId}
                    lessonNumber={i + 1}
                    {...lesson}
                  />
                ))}
              </LessonsWrap>
            </GridSection>
          </GridColumn>
        )
      }}
    </Query>
  )
}

export default Overview
