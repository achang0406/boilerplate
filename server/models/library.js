import base from './base.js'

const TABLE = 'library'

const getLibraries = (request, response) => {
  base.getRows(TABLE, request, response);
}

const getLibraryById = (request, response) => {
  base.getRowById(TABLE, request, response);
}

const createLibrary = (request, response) => {
  base.createRow(TABLE, request, response);
}

const updateLibrary = (request, response) => {
  base.updateRow(TABLE, request, response);
}

const deleteLibrary = (request, response) => {
  base.deleteRow(TABLE, request, response);
}

export default {
  getLibraries,
  getLibraryById,
  createLibrary,
  updateLibrary,
  deleteLibrary,
}