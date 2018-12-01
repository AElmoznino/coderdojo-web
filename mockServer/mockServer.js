const { ApolloServer, gql } = require('apollo-server')

const levels = require('./data/levels')
const lessons = require('./data/lessons')

const getLessons = () => lessons

const getLevels = () => levels

const typeDefs = gql`
  type Lesson {
    lessonNumber: Int
    image: Image
    text: String
    title: String
  }

  type Image {
    alt: String
    url: String
  }

  type Level {
    link: String
    title: String
    text: String
  }

  type Query {
    lessons: [Lesson]
    levels: [Level]
  }
`

const resolvers = {
  Query: {
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
