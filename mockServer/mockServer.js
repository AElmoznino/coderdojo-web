const { ApolloServer, gql } = require('apollo-server')

const levels = require('./data/levels')
const lessons = require('./data/lessons')
const lessonsOverview = require('./data/lessonsOverview')

const getLesson = id => {
  const foundLesson = lessons.find(lesson => lesson.lessonId === id)

  return foundLesson
}

const getLessons = () => lessonsOverview

const getLevels = () => levels

const typeDefs = gql`
  type Image {
    alt: String
    url: String
  }

  type Lesson {
    lessonId: String!
    lessonIntro: String!
    lessonShortFacts: String
    lessonTitle: String!
    level: String!
    nextLesson: NextLesson
    objectives: [String]
    sections: [LessonSection]!
  }

  type LessonOverview {
    lessonId: String
    image: Image
    text: String
    title: String
  }

  type LessonSection {
    sectionBody: String
    sectionFinishingText: String
    sectionImgAlt: String
    sectionImgUrl: String
    sectionSandbox: String
    sectionTitle: String
  }

  type Level {
    link: String
    title: String
    text: String
  }

  type NextLesson {
    lessonId: String
    title: String
  }

  type Query {
    lesson(id: String): Lesson
    lessons: [LessonOverview]
    levels: [Level]
  }
`

const resolvers = {
  Query: {
    lesson: (root, { id }) => getLesson(id),
    lessons: root => getLessons(),
    levels: root => getLevels(),
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
