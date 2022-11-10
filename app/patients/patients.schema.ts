import { DataTypes, Sequelize, Model } from "sequelize";
import postgres from "../connections/postgres.connection";

class patients extends Model{
    id!: number;
    name!:string;
    age!:number;
    gender!:string;
    blood_group!:string;
}

patients.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    blood_group: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: postgres,
    timestamps:false
})
 
patients.sync();

export default patients;
