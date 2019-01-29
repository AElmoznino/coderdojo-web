import React from 'react'
import { mount } from 'enzyme'
import Info from '../Info'
import MockedProviders from 'utils/test-utils/MockedProviders'

jest.unmock('graphql-tag')
jest.unmock('react-apollo')

describe('components/Info', () => {
  let component
  let match
  let mockedResponse

  beforeEach(() => {
    match = {
      params: {
        pageId: 'about',
      },
    }

    mockedResponse = {
      page: {
        __typename: 'Page',
        pageBody:
          '# Om CoderDojo Webbskolan\n\nWebbskolan är ett projekt framtaget av CoderDojo Stockholm för att lära barn och ungdomar att programmera för webben. Här finns ett urval av övningar i HTML, CSS och Javascript. Tanken är att man ska kunna jobba helt självgående.\n\nSidan är optimerad för Google Chrome och anpassad för bärbar dator då det är vad barnen/ungdomarna har med sig till CoderDojo.\n\nAll källkod finns tillgänglig på [GitHub](https://github.com/AElmoznino/coderdojo-web).\n\n## Om CoderDojo\nCoderDojo är en kodklubb för barn och ungdomar mellan 7 och 17 år. I skrivande stund (januari 2018) finns det i 111 länder. Det är gratis att gå med och alla volontärer arbetar ideellt, eftersom vi tycker att alla barn ska få chansen att upptäcka hur kul programmering är.\n        \nLäs mer om [CoderDojo](https://coderdojo.com/) och [CoderDojo Stockholm](http://coderdojostockholm.se), där du även kan se vårt schema för kommande dojos .',
      },
    }

    component = mount(
      <MockedProviders response={mockedResponse}>
        <Info match={match} />
      </MockedProviders>,
    )
  })

  it('renders Info', done => {
    setImmediate(() => {
      component.update()

      expect(component).toMatchSnapshot()

      done()
    })
  })
})
