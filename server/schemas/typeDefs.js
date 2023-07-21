const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String!
    link: String!
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  # LIL TODO: update these mutations
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(newBook: bookData!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;