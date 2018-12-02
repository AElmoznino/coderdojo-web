// @flow

import React from 'react'
import styled from 'styled-components'
import GridColumn from 'components/Grid/GridColumn'
import loader from './img/loader.svg'

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes.large};
`

export const LoadingIndicator = () => (
  <GridColumn>
    <Center>
      <img alt="Loading indicator" src={loader} />
    </Center>
  </GridColumn>
)

export default LoadingIndicator
