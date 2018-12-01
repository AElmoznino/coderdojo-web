import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '../Navigation'

describe('components/Navigation', () => {
  let component

  beforeEach(() => {
    component = shallow(<Navigation />)
  })

  it('renders Navigation', () => {
    expect(component).toMatchSnapshot()
  })
})
