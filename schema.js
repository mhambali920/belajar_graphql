const { gql } = require("apollo-server");

const typeDefs = gql`
    type Book {
        _id: ID!
        title: String!
        author: String!
        description: String
        release_year: Int!
        genre: String!
    }

    type User {
        id: ID!
        email: String!
        name: String!
    }
    type Query {
        getAllBook: [Book]!
        getBook(_id: ID!): Book
        getUsers: [User]
    }
    type Mutation {
        createBook(title: String!, author: String!, description: String, release_year: Int!, genre: String!): Book!
        updateBook(_id: ID!, title: String, author: String, description: String, release_year: Int, genre: String): Book!
        deleteBook(_id: ID!): Boolean
        createUser(name: String!, email: String!): User
    }
`;
module.exports = typeDefs;
