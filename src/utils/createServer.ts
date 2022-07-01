import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import UserResolver from '../modules/user/user.resolver';
const express = require('express');

const app = express();

const buildContext = () => {};

export async function createServer() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });
  const server = new ApolloServer({
    schema,
    context: buildContext,
  });

  return { app, server };
}
