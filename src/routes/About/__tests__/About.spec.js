import React from 'react'
import { shallow } from 'enzyme'
import About from '../About'

describe('components/About', () => {
  let component

  beforeEach(() => {
    component = shallow(<About />)
  })

  it('renders About', () => {
    expect(component).toMatchSnapshot()
  })
})
