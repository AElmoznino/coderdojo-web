// @flow

import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import ButtonLink from 'components/Button/ButtonLink'
import H1 from 'components/Typography/H1'
import GridSection from 'components/Grid/GridSection'

type StartSectionProps = {
  link: string,
  text: string,
  title: string,
}

const InnerWrap = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-column-gap: ${({ theme }) => theme.sizes.medium};
`

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const AlignedButton = styled(ButtonLink)`
  align-self: flex-end;
`

const StartSection = ({ link, text, title }: StartSectionProps) => (
  <GridSection>
    <H1>{title}</H1>
    <InnerWrap>
      <img alt="placeholder alt" src="https://placeimg.com/200/200/tech" />
      <RightWrap>
        <ReactMarkdown>{text}</ReactMarkdown>
        <AlignedButton to={link}>Kom igång</AlignedButton>
      </RightWrap>
    </InnerWrap>
  </GridSection>
)

export default StartSection
