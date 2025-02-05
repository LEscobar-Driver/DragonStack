// pool obj can run queries that both select data and insert data into tables
const { Pool } = require('pg');
const databaseConfiguration = require(`./secrets/databaseConfiguration.js`);

const pool = new Pool(databaseConfiguration);

module.exports = pool;

// // (sql cmd, call back func)
// pool.query('SELECT * FROM generation', (error, response) => {
//     if (error) return console.log("error", error);

//     console.log('response.rows', response.rows);
// })