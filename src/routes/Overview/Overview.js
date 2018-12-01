// @flow

import React from 'react'
import GridColumn from '../../components/Grid/GridColumn'
import Wrap from '../../components/Grid/GridSection'
import type { Match } from 'react-router-dom'

type OverviewProps = {
  match: Match,
}

const Overview = ({ match }: OverviewProps) => {
  return (
    <GridColumn>
      <Wrap>Översikt av {match.params.level}</Wrap>
    </GridColumn>
  )
}

export default Overview
