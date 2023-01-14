import { DataTypes, Sequelize, Model } from "sequelize";
import postgres from "../connections/postgres.connection";

class users extends Model{
    id!: number;
    name!:string;
    email!:string;
    password !: string;
    role !: string;
    age !: number;
    gender !: string;
    blood_group !: string;
    address !: string;
    contact !: number;
}
users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true
    },
    blood_group: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contact: {
        type: DataTypes.BIGINT,
        allowNull: true
    }
},

{
    sequelize: postgres,
    timestamps:false
})
 console.log(users,"creating user")
users.sync();

export default users;
