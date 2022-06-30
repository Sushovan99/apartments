require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import { typeDefs, resolvers } from './graphql';
import { connectDB } from './database/connectDB';

const PORT = process.env.PORT;

const mount = async (app: Application) => {
  const db = await connectDB();
  console.log('🎉 DB connected');
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
      db;
    },
  });
  await server.start();
  server.applyMiddleware({ app, path: '/api' });
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}/api`);
  });
  const listings = await db.listings.find({}).toArray();
  console.log(listings);
};

mount(express());
