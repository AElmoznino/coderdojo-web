// @flow

import React from 'react'
import GridColumn from 'components/Grid/GridColumn'
import GridSection from 'components/Grid/GridSection'
import H1 from 'components/Typography/H1'
import Button from 'components/Button/Button'

const ErrorMessage = () => (
  <GridColumn>
    <GridSection>
      <H1>
        Hoppsan, något gick snett! Pröva att ladda om sidan och håll tummarna!
      </H1>
      <Button onClick={() => window.location.reload()}>Ladda om sidan</Button>
    </GridSection>
  </GridColumn>
)

export default ErrorMessage
