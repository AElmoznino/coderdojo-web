// @flow

import React from 'react'
import GridColumn from 'components/Grid/GridColumn'
import GridSection from 'components/Grid/GridSection'
import H1 from 'components/Typography/H1'

export const About = () => (
  <GridColumn>
    <GridSection>
      <H1>Om CoderDojo Webbskolan</H1>
      <p>
        Webbskolan är ett projekt för att lära barn och ungdomar att programmera
        för webben. Här finns ett urval av övningar i HTML, CSS och Javascript.
        Tanken är att man ska kunna jobba helt självgående.
      </p>
    </GridSection>
  </GridColumn>
)

export default About
