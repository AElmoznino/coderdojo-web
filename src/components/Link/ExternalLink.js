// @flow

import React from 'react'
import styled from 'styled-components'

type ExternalLinkProps = {
  text: string,
  url: string,
}

const Link = styled.a`
  color: ${({ theme }) => theme.colors.pickledBluewood};

  &:hover {
    color: ${({ theme }) => theme.colors.cornflowerBlue};
  }
`

export const ExternalLink = ({ text, url }: ExternalLinkProps) => (
  <Link href={url} rel="noopener noreferrer" target="_blank">
    {text}
  </Link>
)

export default ExternalLink
