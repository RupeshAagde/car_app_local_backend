import { Sequelize } from 'sequelize';
const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USERNAME } = process.env;

const postgres = new Sequelize(
    DB_NAME as string,
    DB_USERNAME as string,
    DB_PASSWORD as string, {
    host: DB_HOST as string,
    port: 5432,
    dialect: 'postgres'
});
// console.log("db")
export const connectToPostgres = async () => {
    try {
        console.log("db")
        await postgres.authenticate();
        console.log('POSTGRES CONNECTED SUCCESSFULLY');

        return true;
    } catch (e) {
        throw { message: 'COULD NOT CONNECT TO POSTGRES' }
    }
}

export default postgres;