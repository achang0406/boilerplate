import base from './base.js'

const TABLE = 'person'

const getPersons = (request, response) => {
  base.getRows(TABLE, request, response);
}

const getPersonById = (request, response) => {
  base.getRowById(TABLE, request, response);
}

const createPerson = (request, response) => {
  base.createRow(TABLE, request, response);
}

const updatePerson = (request, response) => {
  base.updateRow(TABLE, request, response);
}

const deletePerson = (request, response) => {
  base.deleteRow(TABLE, request, response);
}

export default {
  getPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
}