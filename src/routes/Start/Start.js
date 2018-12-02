// @flow

import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import GridColumn from 'components/Grid/GridColumn'
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator'
import StartSection from './components/StartSection'

const GET_LEVELS = gql`
  {
    levels {
      link
      title
      text
    }
  }
`

export const Start = () => (
  <Query query={GET_LEVELS}>
    {({ data, error, loading }) => {
      if (loading) return <LoadingIndicator />
      if (error) return <ErrorMessage />
      if (!data) return null

      return (
        <GridColumn>
          {data.levels.map(level => (
            <StartSection
              key={level.title}
              link={level.link}
              text={level.text}
              title={level.title}
            />
          ))}
        </GridColumn>
      )
    }}
  </Query>
)

export default Start
