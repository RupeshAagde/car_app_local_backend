import { Sequelize } from 'sequelize';
import * as dotenv from "dotenv";
dotenv.config();
const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USERNAME } = process.env;
console.log(DB_NAME);
console.log(DB_HOST);


const postgres = new Sequelize(
    DB_NAME as string,
    DB_USERNAME as string,
    String(DB_PASSWORD) as string, {
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