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
        difficultyLevel: 'nybörjare',
        lessonTitle: 'HTML del 1',
        lessonShortFacts: null,
        lessonIntro:
          'HTML används för att strukturera upp hemsidor. Alla hemsidor är byggda med det.',
        lessonBody:
          '## Vad är HTML\nHTML står för Hypertext Markup Language. Det är instruktioner för webbläsaren hur sidan ska ritas upp i din webbläsare. \n\nDe flesta hemsidor, även denna, har rubriker, textstycken, bilder, den s.k. navigationen högst upp. HTML instruerar webbläsaren hur den ska rita upp din hemsida.\n\n##Hur skriver man HTML\nHTML består av olika så kallade "taggar" som är förbestämda. Rubriker skrivs som  osv beroende på storlek. \nOm du vill skriva en rubrik, så måste du tänka på att själva rubriken ska vara *innanför* taggarna, såhär: \nI rutan nedan kan du se exempel på hur HTML-kod skrivs (till vänster), och hur det då kommer se ut (till höger).\n\n<iframe src="https://codesandbox.io/embed/v3qpwx7063?fontsize=12&hidenavigation=1" style="width:100%; height:500px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',
        lessonObjectives:
          'Du kommer lära dig:\n\n1. vad HTML är och används till\n2. strukturera upp din hemsida med HTML',
        nextLesson: {
          __typename: 'NextLesson',
          lessonId: 'nybörjare-2',
          lessonTitle: 'HTML del 2',
        },
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
