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
            'Har du aldrig kodat förrut? Då börjar du här och får en introduktion\n          till hur man strukturerar upp hemsidor med HTML och snyggar till dem\n          med CSS.',
        },
        {
          __typename: 'Level',
          link: '/overview/fortsättning',
          title: 'Fortsättning',
          text:
            'Har du redan prövat lite skriven programmering (dvs inte code.org eller Scratch)\n    så är det här du fortsätter. Du får pröva på Testdriven utveckling och att ändra dina\n    hemsidor med JavaScript',
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
