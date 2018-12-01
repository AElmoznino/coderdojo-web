import React from 'react'
import { shallow } from 'enzyme'
import Start from '../Start'

describe('components/Start', () => {
  let component

  beforeEach(() => {
    component = shallow(<Start />)
  })

  it('renders Start', () => {
    expect(component).toMatchSnapshot()
  })
})
