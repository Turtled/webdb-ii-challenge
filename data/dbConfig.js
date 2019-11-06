const knex = require('knex');

const config = {
  client: 'sqlite3',
  connection: {
    filename: './data/car-dealer.db3',
  },
  useNullAsDefault: true,
};

module.exports = knex(config);