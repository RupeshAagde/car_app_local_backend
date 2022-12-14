import { DataTypes, Sequelize, Model } from "sequelize";
import postgres from "../connections/postgres.connection";

class users extends Model{
    id!: number;
    username!:string;
    email!:string;
    password !: string;
    role !: string;
}
users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
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
    }
},

{
    sequelize: postgres,
    timestamps:false
})
 console.log(users,"creating user")
users.sync();

export default users;
