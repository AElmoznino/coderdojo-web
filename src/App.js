import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

import Navigation from './components/Navigation/Navigation'
import About from './routes/About/About'
import Start from './routes/Start/Start'
import Overview from './routes/Overview/Overview'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <>
            <Navigation />
            <Route path="/" exact component={Start} />
            <Route path="/about" component={About} />
            <Route path="/overview/:level" component={Overview} />
          </>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
