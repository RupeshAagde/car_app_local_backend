import { DataTypes, Sequelize, Model } from "sequelize";
import postgres from "../connections/postgres.connection";

class customer extends Model{
    id!: number;
    customer_name !:string;
    customer_email !:string;
    password !: string

}

customer.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    customer_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize: postgres,
    timestamps:false
})
 
customer.sync();

export default customer;
