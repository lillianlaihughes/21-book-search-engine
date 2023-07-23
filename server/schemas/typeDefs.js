const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type bookData {
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

  # LIL TODO: update these mutations -- should newBook be bookData! instead of String!
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(newBook: String!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
