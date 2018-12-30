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
        level: 'nybörjare',
      },
    }

    mockedResponse = {
      difficulty: {
        __typename: 'Difficulty',
        difficultyName: 'Nybörjare',
        difficultyId: 'beginner',
        difficultyOverviewDescription:
          'Välj ett spår nedan. Du kan göra dem i vilken ordning du vill. Med **HTML** kan du bygga enklare hemsidor. **JavaScript** hjälper dig att göra dem interaktiva.',
        difficultyDescription:
          'Har du inte kodat förrut? Då börjar du här. Lär dig:\n\n- strukturera upp hemsidor med **HTML**\n- snygga till din hemsida med **CSS**\n- bygga din första hemsida, ett Pokédex\n- lösa dina matteläxor med **JavaScript**',
        courses: [
          {
            __typename: 'Course',
            courseDescription:
              '**HTML** används för att strukturera upp dina hemsidor med rubriker, texter, bilder osv. I denna mini-kurs får du lära dig grunderna i HTML.',
            courseId: 'html-beginner',
            courseName: 'HTML för nybörjare',
            lessons: [
              {
                __typename: 'Lesson',
                lessonId: 'html-beginner-1',
                lessonShortFacts:
                  'Lär dig vad HTML används till och hur du strukturerar upp hemsidor med det.',
                lessonTitle: 'HTML del 1',
              },
            ],
          },
          {
            __typename: 'Course',
            courseDescription:
              'Testdriven utveckling (kallas **TDD**) är det rätta sättet att koda när man har mycket logik. Har du aldrig skrivit JavaScript förrut så fortsätter du här. ',
            courseId: 'tdd-beginner',
            courseName: 'Testdriven utveckling i JavaScript',
            lessons: [
              {
                __typename: 'Lesson',
                lessonId: 'tdd-beginner-1',
                lessonShortFacts: null,
                lessonTitle: 'Introduktion till TDD',
              },
            ],
          },
        ],
      },
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
