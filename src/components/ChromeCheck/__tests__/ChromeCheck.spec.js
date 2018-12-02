import React from 'react'
import { shallow } from 'enzyme'
import ChromeCheck from '../ChromeCheck'

describe('components/ChromeCheck', () => {
  let component

  beforeEach(() => {
    component = shallow(<ChromeCheck />)
  })

  it('renders ChromeCheck', () => {
    expect(component).toMatchSnapshot()
  })
})
