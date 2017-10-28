const conn = require('./conn');
const Sequelize = conn.Sequelize;
const generateRandomAnimalName = require('random-animal-name-generator');


const User = conn.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
    defaultValue: '#FF0000'
  }
})

User.createUser = function(color){
  const name = generateRandomAnimalName();
  return User.create({ name, color })

}

module.exports = User;
