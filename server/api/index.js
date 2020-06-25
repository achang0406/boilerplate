import express from 'express';
import { persons, books, libraries } from './routes';

// guaranteed to get dependencies
export default () => {
  const app = express.Router();

  persons(app);
  books(app);
  libraries(app);

  return app;
};
