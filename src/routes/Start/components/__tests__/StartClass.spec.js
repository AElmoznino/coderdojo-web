import React from 'react'
import { shallow } from 'enzyme'
import StartClass from '../StartClass'

describe('components/StartClass', () => {
  let component

  beforeEach(() => {
    component = shallow(<StartClass />)
  })

  it('renders StartClass', () => {
    expect(component).toMatchSnapshot()
  })
})
