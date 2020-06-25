import express from 'express';
import { libraryModel } from 'Models';

const route = express.Router();

export default (app) => {
  app.use('/libraries', route);

  route.get('/', libraryModel.getLibraries);
  route.get('/:id', libraryModel.getLibraryById);
  route.post('', libraryModel.createLibrary);
  route.put('/:id', libraryModel.updateLibrary);
  route.delete('/:id', libraryModel.deleteLibrary);
};
