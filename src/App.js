import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

import Navigation from './components/Navigation/Navigation'
import About from './routes/About/About'
import Lesson from './routes/Lesson/Lesson'
import Overview from './routes/Overview/Overview'
import Start from './routes/Start/Start'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <>
        <Navigation />
        <Route path="/" exact component={Start} />
        <Route path="/about" component={About} />
        <Route path="/overview/:level" component={Overview} />
        <Route path="/lesson/:lessonNumber" component={Lesson} />
      </>
    </Router>
  </ThemeProvider>
)

export default App
