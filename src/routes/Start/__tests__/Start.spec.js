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
      levels: [
        {
          __typename: 'Level',
          link: '/overview/nybörjare',
          title: 'Nybörjare',
          text:
            'Har du inte kodat förrut? Då börjar du här. Lär dig:\n  * strukturera upp hemsidor med **HTML**\n  * snygga till din hemsida med **CSS**\n  * bygga din första hemsida, ett Pokédex',
        },
        {
          __typename: 'Level',
          link: '/overview/fortsättning',
          title: 'Fortsättning',
          text:
            'Har du kodat lite förrut, eller är redan klar med nybörjare? \n          Då fortsätter du här och lär dig:\n  * Testdriven utveckling (**TDD**), det rätta sättet att koda på\n  * **JavaScript** (förkortas **JS**) som används för att bygga spel, avancerade hemsidor, och annat kul\n  ',
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
