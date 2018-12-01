import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import GridColumn from '../Grid/GridColumn'

const Wrap = styled(GridColumn)`
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  padding-top: ${({ theme }) => theme.sizes.medium};
`

const List = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  height: ${({ theme }) => theme.sizes.large};
  left: 0;
  right: 0;
  top: 0;

  & a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  & a:hover {
    font-weight: 700;
  }
`

export const Navigation = () => (
  <Wrap>
    <List>
      <li>
        <Link to="/">Start</Link>
      </li>
      <li>
        <Link to="/about">Om</Link>
      </li>
    </List>
  </Wrap>
)

export default Navigation
