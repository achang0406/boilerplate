import base from './base.js'

const TABLE = 'book'

const getBooks = (request, response) => {
  base.getRows(TABLE, request, response);
}

const getBookById = (request, response) => {
  base.getRowById(TABLE, request, response);
}

const createBook = (request, response) => {
  base.createRow(TABLE, request, response);
}

const updateBook = (request, response) => {
  base.updateRow(TABLE, request, response);
}

const deleteBook = (request, response) => {
  base.deleteRow(TABLE, request, response);
}

export default {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
}