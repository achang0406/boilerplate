import pkg from 'pg';

// local postgres connection

export default new pkg.Pool({
  user: 'chanzuechang',
  host: 'localhost',
  database: 'library',
  password: 'password',
  port: 5432,
});
