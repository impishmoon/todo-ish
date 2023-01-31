const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBNAME,
    ssl: process.env.NODE_ENV === 'production' ? {rejectUnauthorized : false} : false,
})

module.exports = pool;
