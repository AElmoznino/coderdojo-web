import styled from 'styled-components'

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  margin-bottom: ${({ theme }) => theme.sizes.large};
  padding: ${({ theme }) => theme.sizes.medium};
`

export default Wrap
