const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");
const mongoose = require("mongoose");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
// connection to mongodb
mongoose.connect("mongodb://localhost:27017/belajar_graphql", {
    //
});

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`appollo server running at ${url}`));
