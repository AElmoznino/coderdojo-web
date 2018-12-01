import React from 'react'
import { shallow } from 'enzyme'
import Overview from '../Overview'

describe('components/Overview', () => {
  let component
  let match

  beforeEach(() => {
    match = {
      params: {
        level: 'Nybörjare',
      },
    }

    component = shallow(<Overview match={match} />)
  })

  it('renders Overview', () => {
    expect(component).toMatchSnapshot()
  })
})
