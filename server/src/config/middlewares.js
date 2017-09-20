import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers';
import constants from './constants';
import { decodeToken } from '../services/auth';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

async function auth(req, res, next) {
  try {
    console.log('@auth/req.headers.authorization: ', req.headers.authorization);
    if (req.headers.authorization === null) {
      req.user = null;
    } else {
      const token = req.headers.authorization;
      console.log('@auth/token: ', token);
      req.user = token === null ? null : await decodeToken(token);
    }
    return next();
  } catch (error) {
    throw error;
  }
}

export default (app) => {
  app.use(bodyParser.json());

  app.use(auth);

  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: constants.GRAPHQL_PATH,
    }),
  );

  app.use(
    constants.GRAPHQL_PATH,
    graphqlExpress(req => ({
      schema,
      context: {
        user: req.user,
      },
    })),
  );
};
