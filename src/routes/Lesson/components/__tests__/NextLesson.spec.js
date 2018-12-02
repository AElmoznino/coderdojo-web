import React from 'react'
import { shallow } from 'enzyme'
import NextLesson from '../NextLesson'

describe('components/NextLesson', () => {
  let component

  beforeEach(() => {
    component = shallow(<NextLesson level="nybörjare" />)
  })

  it('renders NextLesson when there is no next lesson', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders NextLesson where there is a next lesson', () => {
    component.setProps({
      nextLesson: {
        lessonId: 'test-id',
        title: 'test-title',
      },
    })

    expect(component).toMatchSnapshot()
  })
})
