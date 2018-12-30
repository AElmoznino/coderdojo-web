// @flow

import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import GridColumn from 'components/Grid/GridColumn'
import H1 from 'components/Typography/H1'
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator'
import StartDifficulty from './components/StartDifficulty'

const GET_DIFFICULTIES = gql`
  query difficulties {
    difficulties {
      difficultyDescription
      difficultyId
      difficultyName
      difficultyOverviewDescription
    }
  }
`

export const Start = () => (
  <Query query={GET_DIFFICULTIES}>
    {({ data: { difficulties }, error, loading }) => {
      if (loading) return <LoadingIndicator />
      if (error) return <ErrorMessage />
      if (!difficulties) return null

      return (
        <GridColumn>
          <H1>Välkommen till CoderDojo Webbskolan</H1>
          <p>
            Här kan du lära dig koda för webben. När du är klar kommer du kunna
            bygga hemsidor, lösa din matteläxor med hjälp av kod, och mycket
            annat skoj. Webbskolan är helt gratis och du behöver inget konto.
          </p>

          {difficulties.map(difficulty => (
            <StartDifficulty key={difficulty.difficultyId} {...difficulty} />
          ))}
        </GridColumn>
      )
    }}
  </Query>
)

export default Start
