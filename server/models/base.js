import database from './connection.js';

import HTTP_RESPONSE from 'Constants/httpResponse.js';

const getRows = (table, request, response) => {
  database.query(`SELECT * FROM ${table} ORDER BY id ASC`, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(HTTP_RESPONSE.FOUND).json(results.rows);
  });
};

const getRowById = (table, request, response) => {
  const id = parseInt(request.params.id);

  database.query(
    `SELECT * FROM ${table} WHERE id = $1`,
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(HTTP_RESPONSE.FOUND).json(results.rows);
    }
  );
};

const createRow = (table, request, response) => {
  const { rules } = request.body;

  database.query(
    `INSERT INTO ${table} (rules) VALUES ($1)`,
    [rules],
    (error, result) => {
      if (error) {
        throw error;
      }
      response
        .status(HTTP_RESPONSE.CREATED)
        .send(`Row added with ID: ${result.insertId}`);
    }
  );
};

const updateRow = (table, request, response) => {
  const id = parseInt(request.params.id);
  const { rules } = request.body;

  database.query(
    `UPDATE ${table} SET rules = $1 WHERE id = $3`,
    [rules, id],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(HTTP_RESPONSE.FOUND).send(`Row modified with ID: ${id}`);
    }
  );
};

const deleteRow = (table, request, response) => {
  const id = parseInt(request.params.id);

  database.query(`DELETE FROM ${table} WHERE id = $1`,
    [id],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(HTTP_RESPONSE.FOUND).send(`Row deleted with ID: ${id}`);
    }
  );
};

export default {
  getRows,
  getRowById,
  createRow,
  updateRow,
  deleteRow,
};
