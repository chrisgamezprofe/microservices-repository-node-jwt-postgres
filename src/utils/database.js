const Sequalize = require('sequelize');

const sequalize = new Sequalize(process.env.POSTGRES_URI, {
  dialect: "postgres",
});

sequalize.sync();
//sequalize.sync({ force: true });

module.exports = sequalize;