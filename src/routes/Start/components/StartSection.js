// @flow

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import H1 from '../../../components/Typography/H1'
import Wrap from '../../../components/Grid/GridSection'

type StartSectionProps = {
  link: string,
  text: string,
  title: string,
}

const InnerWrap = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-column-gap: 20px;
`

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Button = styled(Link)`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.downy};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  padding: 10px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 3px 1px #ccc;
  }
`

const StartSection = ({ link, text, title }: StartSectionProps) => (
  <Wrap>
    <H1>{title}</H1>
    <InnerWrap>
      <img alt="placeholder alt" src="https://placeimg.com/200/200/tech" />
      <RightWrap>
        <p>{text}</p>
        <Button to={link}>Kom igång</Button>
      </RightWrap>
    </InnerWrap>
  </Wrap>
)

export default StartSection
