"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToPostgres = void 0;
const sequelize_1 = require("sequelize");
const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USERNAME } = process.env;
const postgres = new sequelize_1.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: 5432,
    dialect: 'postgres'
});
// console.log("db")
const connectToPostgres = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("db");
        yield postgres.authenticate();
        console.log('POSTGRES CONNECTED SUCCESSFULLY');
        return true;
    }
    catch (e) {
        throw { message: 'COULD NOT CONNECT TO POSTGRES' };
    }
});
exports.connectToPostgres = connectToPostgres;
exports.default = postgres;
//# sourceMappingURL=postgres.connection.js.map