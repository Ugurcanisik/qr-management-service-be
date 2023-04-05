import { Sequelize } from 'sequelize-typescript';
import * as dbConfig from '../../config/database.config.json';

const PSQL_INSTANCE: Sequelize = new Sequelize({
    host: dbConfig.HOSTNAME,
    username: dbConfig.USERNAME,
    password: dbConfig.PASSWORD,
    database: dbConfig.SCHEMA,
    dialect: 'postgres',
    pool: {
        max: dbConfig.OPTIONS.MAX_CONNECTION,
        min: dbConfig.OPTIONS.MIN_CONNECTION,
        idle: dbConfig.OPTIONS.IDLE_TIME
    },
    logging: dbConfig.OPTIONS.LOGGING || false,
    benchmark: dbConfig.OPTIONS.BENCHMARK || false,
    models: [__dirname + '/../../entities/*.entity.{js,ts}'],
    modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.entity')).toLowerCase() === member.toLowerCase();
    },
    repositoryMode: true,
    dialectOptions: {
        decimalNumbers: true
    },
    timezone: 'Europe/Istanbul'
});

export default PSQL_INSTANCE;
