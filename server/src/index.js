/* eslint-disable no-console */

import express from 'express';
import cors from 'cors';

import { createServer } from 'http';

import './config/db';
import constants from './config/constants';
import middlewares from './config/middlewares';
import mocks from './mocks';

const app = express();

app.use('*', cors({ origin: 'http://localhost:3000' }));

middlewares(app);

const graphQLServer = createServer(app);

mocks().then(() => {
  graphQLServer.listen(constants.PORT, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`App listen to port: ${constants.PORT}`);
    }
  });
});
