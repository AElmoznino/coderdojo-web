import React from 'react'
import { mount } from 'enzyme'
import Overview from '../Overview'
import MockedProviders from 'utils/test-utils/MockedProviders'

jest.unmock('graphql-tag')
jest.unmock('react-apollo')

describe('components/Overview', () => {
  let component
  let match
  let mockedResponse

  beforeEach(() => {
    match = {
      params: {
        level: 'Nybörjare',
      },
    }

    mockedResponse = {
      lessons: [
        {
          __typename: 'Lesson',
          lessonId: 'nybörjare-1',
          image: {
            __typename: 'Image',
            alt: 'HTML för nybörjare, del 1',
            url: 'https://placeimg.com/180/180/tech',
          },
          text: 'Här får du lära dig grunderna i HTML',
          title: 'HTML del 1',
        },
        {
          __typename: 'Lesson',
          lessonId: 'nybörjare-2',
          image: {
            __typename: 'Image',
            alt: 'HTML för nybörjare, del 2',
            url: 'https://placeimg.com/180/180/tech',
          },
          text: 'Här får du lära dig mer om HTML',
          title: 'HTML del 2',
        },
        {
          __typename: 'Lesson',
          lessonId: 'nybörjare-3',
          image: {
            __typename: 'Image',
            alt: 'CSS för nybörjare',
            url: 'https://placeimg.com/180/180/tech',
          },
          text: 'Här får du lära dig grunderna i CSS',
          title: 'CSS del 1',
        },
        {
          __typename: 'Lesson',
          lessonId: 'nybörjare-4',
          image: {
            __typename: 'Image',
            alt: 'CSS för nybörjare',
            url: 'https://placeimg.com/180/180/tech',
          },
          text: 'Här får du lära dig mer om CSS',
          title: 'CSS del 2',
        },
      ],
    }

    component = mount(
      <MockedProviders response={mockedResponse}>
        <Overview match={match} />
      </MockedProviders>,
    )
  })

  it('renders Overview', done => {
    setImmediate(() => {
      component.update()

      expect(component).toMatchSnapshot()

      done()
    })
  })
})
