// @flow

import styled from 'styled-components'

const GridSection = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  border: 1px solid ${({ theme }) => theme.colors.wildSand};
  margin-bottom: ${({ theme }) => theme.sizes.large};
  padding: ${({ theme }) => theme.sizes.medium};

  &:first-of-type {
    margin-top: ${({ theme }) => theme.sizes.large};
  }
`

export default GridSection
