import { DataTypes, Model } from 'sequelize';
import postgres from '../connections/postgres.connection';
import patients from '../patients/patients.schema';

class HistoricData extends Model {
    id!: number;
    patient_id!:number;
    date!: string;
    diagnosis!: string;
    prescription!: string;
    lab_Report!: string;
}

HistoricData.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diagnosis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lab_Report: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize: postgres,
    
})

patients.hasMany(HistoricData, { foreignKey: 'patient_id' })

HistoricData.sync();

export default HistoricData;