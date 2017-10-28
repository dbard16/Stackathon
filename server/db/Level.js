const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Level = conn.define('level', {

  description: {
    type: Sequelize.TEXT
  }
})

Level.findLevel = function(id) {
  return Level.findAll({
    where:{
      id: id
    },
    include:[{
      model: conn.models.options
    }]
  })
}
module.exports = Level;
