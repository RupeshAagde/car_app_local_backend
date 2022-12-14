"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgres_connection_1 = __importDefault(require("../connections/postgres.connection"));
class patients extends sequelize_1.Model {
}
patients.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    blood_group: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    contact: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    // name: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // age: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // gender: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // blood_group: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // }
}, {
    sequelize: postgres_connection_1.default,
    timestamps: false
});
patients.sync();
exports.default = patients;
//# sourceMappingURL=patients.schema.js.map