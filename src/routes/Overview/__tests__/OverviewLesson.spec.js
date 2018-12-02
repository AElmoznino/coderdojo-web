import React from 'react'
import { shallow } from 'enzyme'
import OverviewLesson from '../OverviewLesson'

describe('components/OverviewLesson', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <OverviewLesson
        image={{ alt: 'testAlt', url: 'testUrl' }}
        lessonId="nybörjare-1"
        lessonNumber={1}
        text="testText"
      />,
    )
  })

  it('renders OverviewLesson', () => {
    expect(component).toMatchSnapshot()
  })
})
