import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100px;
`

export const StartClass = () => (
  <Wrap>
    <p>Lektion 1</p>
    <img src="https://placeimg.com/200/200/tech" />
    <p>Här får du lära dig mer om ...</p>
  </Wrap>
)

export default StartClass
