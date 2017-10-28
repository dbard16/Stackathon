const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Options = conn.define('options', {

  description: {
    type: Sequelize.TEXT
  },
  goToLevel: {
    type: Sequelize.INTEGER
  },
  answerText: {
    type: Sequelize.TEXT
  }
})

module.exports = Options;
