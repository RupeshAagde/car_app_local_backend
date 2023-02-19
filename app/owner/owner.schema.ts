import { DataTypes, Sequelize, Model, DateOnlyDataType } from "sequelize";
import postgres from "../connections/postgres.connection";

class vehicle_detail extends Model{
    id!: number;
    owner_name !: string;
    owner_email !: string;
    password !: string;
    owner_contact_no !: number;
    owner_address !: string;
    vehicle_model !: string;
    vehicle_no !: string;
    per_day_price !: number;
    vehicle_type !: string;
    booking_available !: DateOnlyDataType;
}
vehicle_detail.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    owner_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner_contact_no: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    owner_address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    vehicle_model: {
        type: DataTypes.STRING,
        allowNull: true
    },
    vehicle_no: {
        type: DataTypes.STRING,
        allowNull: true
    },
    per_day_price: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    vehicle_type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    booking_available : {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
},

{
    sequelize: postgres,
    timestamps:false
})

vehicle_detail.sync();

export default vehicle_detail;
