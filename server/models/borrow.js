import base from './base.js';

const TABLE = 'borrow';

const getBorrows = (request, response) => {
  base.getRows(TABLE, request, response);
};

const getBorrowById = (request, response) => {
  base.getRowById(TABLE, request, response);
};

const createBorrow = (request, response) => {
  base.createRow(TABLE, request, response);
};

const updateBorrow = (request, response) => {
  base.updateRow(TABLE, request, response);
};

const deleteBorrow = (request, response) => {
  base.deleteRow(TABLE, request, response);
};

export default {
  getBorrows,
  getBorrowById,
  createBorrow,
  updateBorrow,
  deleteBorrow,
};
