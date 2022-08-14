const Sequelize = require("sequelize");

const sequelize = new Sequelize('appointments','root','darkknight2785',{
    host : 'localhost',
    dialect : 'mysql'
});

module.exports = sequelize;
