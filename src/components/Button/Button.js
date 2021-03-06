// @flow

import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.downy};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.small};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  padding: ${({ theme }) => theme.sizes.third};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 3px 1px #ccc;
  }
`

export default Button
