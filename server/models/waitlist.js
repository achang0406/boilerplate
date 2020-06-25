import base from './base.js';

const TABLE = 'waitlist';

const getWaitlists = (request, response) => {
  base.getRows(TABLE, request, response);
};

const getWaitlistById = (request, response) => {
  base.getRowById(TABLE, request, response);
};

const createWaitlist = (request, response) => {
  base.createRow(TABLE, request, response);
};

const updateWaitlist = (request, response) => {
  base.updateRow(TABLE, request, response);
};

const deleteWaitlist = (request, response) => {
  base.deleteRow(TABLE, request, response);
};

export default {
  getWaitlists,
  getWaitlistById,
  createWaitlist,
  updateWaitlist,
  deleteWaitlist,
};
