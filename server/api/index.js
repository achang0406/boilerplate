import express from 'express';
import persons from './routes/persons.js';

// guaranteed to get dependencies
export default () => {
  const app = express.Router();

  persons(app);

  return app
}