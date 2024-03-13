import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Usuario from '../models/Usuario';
import Foto from '../models/Foto';

const models = [User, Usuario, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
