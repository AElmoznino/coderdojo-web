import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import ApolloClient from 'apollo-boost'
import createMockedNetworkFetch from 'apollo-mocknetworkinterface'

jest.unmock('react-apollo')
jest.unmock('react-router-dom')

type MockedProvidersProps = {
  children: React.Node,
  loading?: boolean,
  response?: Object,
}

const MockedProviders = ({
  children,
  loading,
  response = {},
}: MockedProvidersProps) => {
  const createResponse = () => {
    return {
      loading: !!loading,
      data: {
        ...response,
      },
    }
  }

  const mockedNetworkFetch = createMockedNetworkFetch(createResponse, {
    latency: 0,
  })

  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    fetch: mockedNetworkFetch,
  })

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MockedProviders
