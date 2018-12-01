import React from 'react'
import { shallow } from 'enzyme'
import StartSection from '../StartSection'

describe('components/StartSection', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <StartSection link="testLink" text="testText" title="testTitle" />,
    )
  })

  it('renders StartSection', () => {
    expect(component).toMatchSnapshot()
  })
})
