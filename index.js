import { ApolloServer } from "apollo-server";

import mongoose from "mongoose";

// import typeDefs from schema.js
import { typeDefs } from "./schema.js";
// import resolver from resolve.js
import resolvers from "./resolvers.js";
// connection to mongodb
mongoose.connect("mongodb://localhost:27017/belajar_graphql", {
    //
});

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`appollo server running at ${url}`));
