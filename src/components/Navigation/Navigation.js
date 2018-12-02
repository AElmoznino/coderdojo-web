// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from './img/logo.png'

import GridColumn from '../Grid/GridColumn'

const Wrap = styled(GridColumn)`
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  padding: ${({ theme }) => theme.sizes.medium} 0px;
`

const List = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
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

const LinksWrap = styled.div`
  & a:not(:last-child) {
    margin-right: ${({ theme }) => theme.sizes.base};
  }
`

export const Navigation = () => (
  <Wrap>
    <List>
      <div>
        <Link to="/">
          <img alt="Webbskolan CoderDojo" src={logo} />
        </Link>
      </div>
      <LinksWrap>
        <Link to="/">Startsidan</Link>
        <Link to="/overview/nybörjare">Nybörjare</Link>
        <Link to="/overview/fortsättning">Fortsättning</Link>
        <Link to="/about">Om</Link>
      </LinksWrap>
    </List>
  </Wrap>
)

export default Navigation
