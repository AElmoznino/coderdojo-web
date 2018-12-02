// @flow

import React from 'react'
import styled from 'styled-components'
import type { Match } from 'react-router-dom'
import GridColumn from 'components/Grid/GridColumn'
import GridSection from 'components/Grid/GridSection'
import H1 from 'components/Typography/H1'
import H4 from 'components/Typography/H4'
import ButtonLink from 'components/Button/ButtonLink'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

type LessonProps = {
  match: Match,
}

const GET_LESSON = gql`
  query GetLesson($id: String) {
    lesson(id: $id) {
      lessonTitle
      lessonShortFacts
      lessonShortFacts
      lessonIntro
      level
      objectives
      nextLesson {
        lessonId
        title
      }
      sections {
        sectionBody
        sectionTitle
        sectionImgAlt
        sectionImgUrl
        sectionFinishingText
        sectionSandbox
      }
    }
  }
`

const TopWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 20px;
`

const ObjectivesBox = styled.div`
  background-color: ${({ theme }) => theme.colors.downy};
  padding: ${({ theme }) => theme.sizes.medium};
`

const Objective = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const NextLesson = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Lesson = ({ match }: LessonProps) => (
  <Query query={GET_LESSON} variables={{ id: match.params.lessonId }}>
    {({ data: { lesson }, error, loading }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      if (!lesson) return null

      return (
        <GridColumn>
          <GridSection>
            <TopWrap>
              <div>
                <H1>{lesson.lessonTitle}</H1>
                {lesson.lessonShortFacts && <p>{lesson.lessonShortFacts}</p>}
                <p>{lesson.lessonIntro}</p>
              </div>

              <ObjectivesBox>
                <H4>Du kommer lära dig:</H4>
                <ol>
                  {lesson.objectives.map((objective, i) => (
                    <Objective key={i}>{objective}</Objective>
                  ))}
                </ol>
              </ObjectivesBox>
            </TopWrap>

            {lesson.sections.map(s => (
              <div key={s.sectionTitle}>
                <H1>{s.sectionTitle}</H1>
                <p>{s.sectionBody}</p>
                {s.sectionImgUrl && (
                  <img alt={s.sectionImgAlt} src={s.sectionImgUrl} />
                )}
                {s.sectionSandbox && (
                  <iframe
                    src={s.sectionSandbox}
                    style={{
                      width: '100%',
                      height: '500px',
                      overflow: 'hidden',
                    }}
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                    title="unique"
                  />
                )}
                {s.sectionFinishingText && <p>{s.sectionFinishingText}</p>}
              </div>
            ))}
          </GridSection>

          <GridSection>
            <NextLesson>
              {lesson.nextLesson ? (
                <>
                  <strong>Nästa lektion: {lesson.nextLesson.title}</strong>
                  <ButtonLink to={`/lesson/${lesson.nextLesson.lessonId}`}>
                    Fortsätt &gt;
                  </ButtonLink>
                </>
              ) : (
                <>
                  Bra jobbat, du är färdig! Tillbaka till översiktssidan för{' '}
                  {lesson.level}
                  <ButtonLink to={`/overview/${lesson.level}`}>
                    Tillbaka
                  </ButtonLink>
                </>
              )}
            </NextLesson>
          </GridSection>
        </GridColumn>
      )
    }}
  </Query>
)

export default Lesson
