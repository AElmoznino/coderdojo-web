import React from 'react'
import { shallow } from 'enzyme'
import StartDifficulty from '../StartDifficulty'

describe('components/StartDifficulty', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <StartDifficulty
        difficultyDescription="testText"
        difficultyId="testLink"
        difficultyName="testTitle"
      />,
    )
  })

  it('renders StartDifficulty', () => {
    expect(component).toMatchSnapshot()
  })
})
