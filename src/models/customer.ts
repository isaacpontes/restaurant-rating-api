import { Sequelize, Optional, Model, DataTypes } from "sequelize";
import { ReviewInstance } from "./review";

export interface CustomerAttributes {
    id: number
    name: string
    phone: string
}

export interface CustomerInput extends Optional<CustomerAttributes, 'id'> { }

export interface CustomerInstance extends Model<CustomerAttributes, CustomerInput>, CustomerAttributes {
    reviews?: ReviewInstance[]
}

export default (sequelize: Sequelize) => {
    const Customer = sequelize.define<CustomerInstance, CustomerAttributes>('customers', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    // Customer.associate = () => {
    //     Customer.belongsToMany(sequelize.models.restaurants, {
    //         through: 'reviews'
    //     })
    // }

    return Customer
}