// @flow

import React from 'react'
import GridColumn from 'components/Grid/GridColumn'
import StartSection from './components/StartSection'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

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
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
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
