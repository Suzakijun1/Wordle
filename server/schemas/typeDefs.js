const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!) : Auth
    login(email: String!, password: String!): Auth
  }
`