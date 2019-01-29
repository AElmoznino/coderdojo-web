// @flow

import React from 'react'
import type { Match } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ReactMarkdown from 'react-markdown'
import GridColumn from 'components/Grid/GridColumn'
import GridSection from 'components/Grid/GridSection'
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'

const GET_PAGE = gql`
  query GetPage($pageId: String) {
    page(where: { pageId: $pageId }) {
      pageBody
    }
  }
`

export const Info = ({ match }: Match) => (
  <Query query={GET_PAGE} variables={{ pageId: match.params.pageId }}>
    {({ data: { page }, error, loading }) => {
      if (loading) return <LoadingIndicator />
      if (error) return <ErrorMessage />
      if (!page) return null

      return (
        <GridColumn>
          <GridSection>
            <ReactMarkdown>{page.pageBody}</ReactMarkdown>
          </GridSection>
        </GridColumn>
      )
    }}
  </Query>
)

export default Info
