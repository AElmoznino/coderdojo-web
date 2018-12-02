import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import Navigation from 'components/Navigation/Navigation'
import About from 'routes/About/About'
import Lesson from 'routes/Lesson/Lesson'
import Overview from 'routes/Overview/Overview'
import Start from 'routes/Start/Start'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
})

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <Navigation />
          <Route path="/" exact component={Start} />
          <Route path="/about" component={About} />
          <Route path="/overview/:level" component={Overview} />
          <Route path="/lesson/:lessonId" component={Lesson} />
        </>
      </Router>
    </ThemeProvider>
  </ApolloProvider>
)

export default App
