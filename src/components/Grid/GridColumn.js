// @flow

import styled from 'styled-components'

const GridColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr ${({ wide }) => (wide ? '1200px' : '900px')} 1fr;

  > * {
    grid-column: 2;
  }
`

export default GridColumn
