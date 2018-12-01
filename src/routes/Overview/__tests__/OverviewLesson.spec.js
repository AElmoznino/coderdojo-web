import React from 'react'
import { shallow } from 'enzyme'
import OverviewLesson from '../OverviewLesson'

describe('components/OverviewLesson', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <OverviewLesson
        lessonNumber={1}
        image={{ alt: 'testAlt', url: 'testUrl' }}
        text="testText"
      />,
    )
  })

  it('renders OverviewLesson', () => {
    expect(component).toMatchSnapshot()
  })
})
