import pkg from 'pg';

const { env } = process;
const DATABASE_URL = env.DATABASE_URL;
const ENV = env.NODE_ENV || 'development';

let config = {};

// checking to know the environment and suitable connection string to use
if (ENV === 'development') {
    config = {
      user: 'chanzuechang',
      host: 'localhost',
      database: 'library',
      password: 'password',
      port: 5432,
    };
} else {
    config = {
      connectionString: DATABASE_URL,
      ssl: false, // TODO - enable ssl verification
    };
}

const pool = new pkg.Pool(config);
pool.on('connect', () => console.log('connected to db'));

export default pool;
