import React from 'react'
import { shallow } from 'enzyme'
import OverviewLesson from '../OverviewLesson'

describe('components/OverviewLesson', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <OverviewLesson
        lessonId="nybörjare-1"
        lessonNumber={1}
        lessonShortFacts="This lesson is about something"
        lessonTitle="testText"
      />,
    )
  })

  it('renders OverviewLesson', () => {
    expect(component).toMatchSnapshot()
  })
})
