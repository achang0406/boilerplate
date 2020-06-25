import base from './base.js';

const TABLE = 'rating';

const getRatings = (request, response) => {
  base.getRows(TABLE, request, response);
};

const getRatingById = (request, response) => {
  base.getRowById(TABLE, request, response);
};

const createRating = (request, response) => {
  base.createRow(TABLE, request, response);
};

const updateRating = (request, response) => {
  base.updateRow(TABLE, request, response);
};

const deleteRating = (request, response) => {
  base.deleteRow(TABLE, request, response);
};

export default {
  getRatings,
  getRatingById,
  createRating,
  updateRating,
  deleteRating,
};
