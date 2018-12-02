import React from 'react'
import { shallow } from 'enzyme'
import LessonSection from '../LessonSection'

describe('components/LessonSection', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <LessonSection sectionBody="Test body" sectionTitle="Test Title" />,
    )
  })

  it('renders LessonSection', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders LessonSection with image', () => {
    component.setProps({
      sectionImgAlt: 'Test image alt',
      sectionImgUrl: 'Test image url',
    })

    expect(component).toMatchSnapshot()
  })

  it('renders LessonSection with sandbox and explaining text after it', () => {
    component.setProps({
      sectionFinishingText: 'Test text explaining the sandbox above it',
      sectionSandbox: 'https://codesandbox.io/embed/some-test-sandbox',
    })

    expect(component).toMatchSnapshot()
  })
})
