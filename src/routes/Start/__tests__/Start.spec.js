import React from 'react'
import { mount } from 'enzyme'
import Start from '../Start'
import MockedProviders from 'utils/test-utils/MockedProviders'

jest.unmock('graphql-tag')
jest.unmock('react-apollo')

describe('components/Start', () => {
  let component
  let mockedResponse

  beforeEach(() => {
    mockedResponse = {
      difficulties: [
        {
          __typename: 'Difficulty',
          difficultyDescription:
            'Har du inte kodat förrut? Då börjar du här. Lär dig:\n\n- strukturera upp hemsidor med **HTML**\n- snygga till din hemsida med **CSS**\n- bygga din första hemsida, ett Pokédex\n- lösa dina matteläxor med **JavaScript**',
          difficultyId: 'beginner',
          difficultyName: 'Nybörjare',
          difficultyOverviewDescription:
            'Välj ett spår nedan. Du kan göra dem i vilken ordning du vill. Med **HTML** kan du bygga enklare hemsidor. **JavaScript** hjälper dig att göra dem interaktiva.',
        },
        {
          __typename: 'Difficulty',
          difficultyDescription:
            'Om du har kodat lite förrut så fortsätter du här.',
          difficultyId: 'intermediate',
          difficultyName: 'Fortsättning',
          difficultyOverviewDescription: null,
        },
      ],
    }

    component = mount(
      <MockedProviders response={mockedResponse}>
        <Start />
      </MockedProviders>,
    )
  })

  it('renders Start', done => {
    setImmediate(() => {
      component.update()

      expect(component).toMatchSnapshot()

      done()
    })
  })
})
