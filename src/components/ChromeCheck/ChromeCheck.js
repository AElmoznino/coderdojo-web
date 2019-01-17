// @flow

import React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from 'components/Button/Button'
import GridColumn from 'components/Grid/GridColumn'
import H1 from 'components/Typography/H1'

type ChromeCheckState = {
  hasBeenDismissed: boolean,
}

const slideUp = keyframes`
  from {
    height: 0px;
  }

  to {
    height: 300px;
  }
`

const Warning = styled.div`
  animation: ${slideUp} 3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  bottom: 0;
  height: 300px;
  left: 0;
  position: absolute;
  right: 0;

  a {
    color: #fff;
  }
`

class ChromeCheck extends React.Component<null, ChromeCheckState> {
  state = {
    hasBeenDismissed: false,
  }

  componentDidMount() {
    const hasDismissedCheck = localStorage.getItem('chromeCheck')

    this.setState({
      hasBeenDismissed: hasDismissedCheck,
    })
  }

  dissmissCheck = () => {
    localStorage.setItem('chromeCheck', true) // prevent the warning from being shown again
    this.setState({ hasBeenDismissed: true }) // trigger a re-render to hide the warning
  }

  render() {
    const { hasBeenDismissed } = this.state

    const isChrome = navigator.userAgent.indexOf('Chrome') !== -1
    if (isChrome) return null

    return !hasBeenDismissed ? (
      <Warning>
        <GridColumn>
          <H1>
            <a
              href="https://www.google.com/chrome/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ladda ner Google Chrome
            </a>{' '}
            för att få bästa upplevelse av sidan.
          </H1>
          <Button onClick={() => this.dissmissCheck()}>Visa inte igen</Button>
        </GridColumn>
      </Warning>
    ) : null
  }
}

export default ChromeCheck
