const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/stackathon', { logging: false, operatorsAliases: false });

module.exports = conn;
