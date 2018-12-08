// @flow

import React from 'react'
import GridColumn from 'components/Grid/GridColumn'
import GridSection from 'components/Grid/GridSection'
import ExternalLink from 'components/Link/ExternalLink'
import H1 from 'components/Typography/H1'
import H4 from 'components/Typography/H4'

export const About = () => (
  <GridColumn>
    <GridSection>
      <H1>Om CoderDojo Webbskolan</H1>
      <p>
        Webbskolan är ett projekt framtaget av CoderDojo Stockholm för att lära
        barn och ungdomar att programmera för webben. Här finns ett urval av
        övningar i HTML, CSS och Javascript. Tanken är att man ska kunna jobba
        helt självgående.
      </p>
      <p>
        Sidan är optimerad för Google Chrome och anpassad för bärbar dator då
        det är vad barnen/ungdomarna har med sig till CoderDojo.
      </p>

      <H4>Om CoderDojo</H4>
      <p>
        CoderDojo är en kodklubb för barn och ungdomar mellan 7 och 17 år. I
        skrivande stund (december 2018) finns det i 108 länder. Det är gratis
        att gå med och alla volontärer arbetar ideellt, eftersom vi tycker att
        alla barn ska få chansen att upptäcka hur kul programmering är.
      </p>
      <p>
        Läs mer om{' '}
        <ExternalLink text="CoderDojo" url="https://coderdojo.com/" /> och{' '}
        <ExternalLink
          text="CoderDojo Stockholm"
          url="http://coderdojostockholm.se"
        />
        , där du även kan se vårt schema för kommande dojos .
      </p>
    </GridSection>
  </GridColumn>
)

export default About
