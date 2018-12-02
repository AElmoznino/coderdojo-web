// @flow

import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import type { Match } from 'react-router-dom'
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

const GET_LESSONS = gql`
  {
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
`

const Overview = ({ match }: OverviewProps) => {
  return (
    <Query query={GET_LESSONS}>
      {({ data, error, loading }) => {
        if (loading) return <LoadingIndicator />
        if (error) return <ErrorMessage />
        if (!data) return null

        return (
          <GridColumn>
            <GridSection>
              <H1>Översikt av {match.params.level}</H1>
              <p>
                Har du aldrig kodat förrut? Då börjar du här och får en
                introduktion till hur man strukturerar upp hemsidor med HTML och
                snyggar till dem med CSS.
              </p>
              <LessonsWrap>
                {data.lessons.map((lesson, i) => (
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
