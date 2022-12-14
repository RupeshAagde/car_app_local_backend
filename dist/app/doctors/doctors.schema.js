"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgres_connection_1 = __importDefault(require("../connections/postgres.connection"));
const patients_schema_1 = __importDefault(require("../patients/patients.schema"));
class HistoricData extends sequelize_1.Model {
}
HistoricData.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    diagnosis: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    prescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lab_Report: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: postgres_connection_1.default,
});
patients_schema_1.default.hasMany(HistoricData, { foreignKey: 'patient_id' });
HistoricData.sync();
exports.default = HistoricData;
//# sourceMappingURL=doctors.schema.js.map