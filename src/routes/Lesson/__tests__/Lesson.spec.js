import React from 'react'
import { mount } from 'enzyme'
import Lesson from '../Lesson'
import MockedProviders from 'utils/test-utils/MockedProviders'

jest.unmock('graphql-tag')
jest.unmock('react-apollo')

describe('components/Lesson', () => {
  let component
  let match
  let mockedResponse

  beforeEach(() => {
    match = {
      params: {
        lessonId: 'nybörjare-1',
      },
    }

    mockedResponse = {
      lesson: {
        __typename: 'Lesson',
        lessonTitle: 'HTML del 1',
        lessonShortFacts: null,
        lessonIntro:
          'HTML används för att strukturera upp hemsidor. Alla hemsidor är byggda med det.',
        level: 'nybörjare',
        objectives: [
          'strukturera upp din hemsida med HTML',
          'inspektera andra hemsidor för att se hur de är uppbyggda',
        ],
        nextLesson: {
          __typename: 'NextLesson',
          lessonId: 'nybörjare-2',
          title: 'HTML del 2',
        },
        sections: [
          {
            __typename: 'LessonSection',
            sectionBody:
              'HTML står för Hypertext Markup Language. Det är instruktioner för webbläsaren hur sidan ska ritas upp i din webbläsare.',
            sectionTitle: 'Vad är HTML',
            sectionImgAlt: null,
            sectionImgUrl: null,
            sectionFinishingText: null,
            sectionSandbox: null,
          },
          {
            __typename: 'LessonSection',
            sectionBody:
              'HTML består av olika så kallade "taggar" som är förbestämda. En rubrik skrivs som <h1>, <h2> osv beroende på storlek.',
            sectionTitle: 'Hur skriver man HTML',
            sectionImgAlt: null,
            sectionImgUrl: null,
            sectionFinishingText: 'Här kommer mer text',
            sectionSandbox: null,
          },
        ],
      },
    }

    component = mount(
      <MockedProviders response={mockedResponse}>
        <Lesson match={match} />
      </MockedProviders>,
    )
  })

  it('renders Lesson', done => {
    setImmediate(() => {
      component.update()

      expect(component).toMatchSnapshot()

      done()
    })
  })
})
