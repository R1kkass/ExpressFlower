// Перадача данных для подключения к БД

const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
    "request",
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
);
