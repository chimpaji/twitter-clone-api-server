// const express = require('express');
// const { ApolloServer, gql } = require('apollo-server-express');

import { createServer } from './utils/createServer';

// // Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// // Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// const app = express();

// (async () => {
//   await server.start();
//   server.applyMiddleware({ app });
// })();

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// );

const main = async () => {
  const { app, server } = await createServer();
  await server.start();
  await server.applyMiddleware({ app });
  await app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

main();
