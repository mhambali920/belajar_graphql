import { gql } from "apollo-server";

export const typeDefs = gql`
    type Book {
        _id: ID!
        title: String!
        author: String!
        description: String
        release_year: Int!
        genre: String!
    }
    type Query {
        getAllBook: [Book]!
    }
    type Mutation {
        createBook(title: String!, author: String!, description: String, release_year: Int!, genre: String!): Book!
    }
`;
