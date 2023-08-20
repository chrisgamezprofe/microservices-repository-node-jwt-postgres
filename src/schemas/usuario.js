const Sequalize = require("sequelize");
const sequelize = require("../utils/database");

const UsuarioSchema = sequelize.define("usuario", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequalize.TEXT,
    allowNull: false,
  },
  email: {
    type: Sequalize.STRING,
    allowNull: false,
    unique: true,
  },
});
module.exports = UsuarioSchema;
