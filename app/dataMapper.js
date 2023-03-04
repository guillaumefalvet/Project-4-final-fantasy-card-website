const database = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = {
      text: "SELECT * FROM card"
    }
    const result = await database.query(query);
    return result.rows;
  },

  async getOne(id) {
    const query = {
      text: "SELECT * FROM card WHERE id = $1",
      values: [id]
    }
    const result = await database.query(query);
    if (result.rowCount === 1) {
      return result.rows[0];
    } else {
      return null;
    }
  },

  async getByElement(element) {
    const query = {
      text: "SELECT * FROM card WHERE element = $1",
      values: [element]
    }
    const result = await database.query(query);
    if (result.rowCount >= 1) {
      return result.rows;
    } else {
      return null;
    }
  },

  async getByLevel(level) {
    const query = {
      text: "SELECT * FROM card WHERE level = $1",
      values: [level]
    }
    const result = await database.query(query);
    if (result.rowCount >= 1) {
      return result.rows;
    } else {
      return null;
    }
  },

  async getByName(name) {
    const query = {
      text: `SELECT * FROM "card" WHERE "name" ILIKE $1`,
      values: [`%${name}%`]
    };

    const result = await database.query(query);
    if (result.rowCount >= 1) {
      return result.rows;
    } else {
      return null;
    }
  },

  async getByDirection(direction, value) {
    const query = {
      text: `SELECT * FROM "card" WHERE 
      $1 = 'north' AND value_north >= $2
      OR $1 = 'south' AND value_south >= $2
      OR $1 = 'east' AND value_east >= $2
      OR $1 = 'west' AND value_west >= $2`,
      values: [direction, value]
    };
    const result = await database.query(query);
    if (result.rowCount >= 1) {
      return result.rows;
    } else {
      return null;
    }
  },
};


module.exports = dataMapper;
