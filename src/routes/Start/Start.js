// @flow

import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import GridColumn from 'components/Grid/GridColumn'
import H1 from 'components/Typography/H1'
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
          <H1>Välkommen till CoderDojo Webbskolan</H1>
          <p>
            Här kan du lära dig koda för webben. När du är klar kommer du kunna
            bygga hemsidor, lösa din matteläxor med hjälp av kod, och mycket
            annat skoj. Webbskolan är helt gratis och du behöver inget konto.
          </p>

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
