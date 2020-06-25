import express from 'express';
import { bookModel } from '../../models/index.js'

const route = express.Router();

export default ( app ) => {
  app.use('/books', route)

  route.get('/', bookModel.getBooks)
  route.get('/:id', bookModel.getBookById)
  route.post('', bookModel.createBook)
  route.put('/:id', bookModel.updateBook)
  route.delete('/:id', bookModel.deleteBook)
}