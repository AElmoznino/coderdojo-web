// @flow

import styled from 'styled-components'

const GridSection = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  margin-bottom: ${({ theme }) => theme.sizes.large};
  padding: ${({ theme }) => theme.sizes.medium};

  &:first-of-type {
    margin-top: ${({ theme }) => theme.sizes.large};
  }
`

export default GridSection
