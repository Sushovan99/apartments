require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import { typeDefs, resolvers } from './graphql';

const PORT = process.env.PORT;

const mount = async (app: Application) => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: '/api' });
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}/api`);
  });
};

mount(express());
