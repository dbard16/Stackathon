const conn = require('./conn');
const User = require('./User');
const Level = require('./Level');
const Options = require('./Options');
// import various models here

Options.belongsTo(Level);
Level.hasMany(Options);

const sync = () => conn.sync();

module.exports = {
  sync,
  //put models here
  models: {
    User,
    Level,
    Options
  }
}
