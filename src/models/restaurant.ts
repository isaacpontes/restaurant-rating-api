import { DataTypes, HasManyAddAssociationMixin, Model, Optional, Sequelize } from "sequelize"
import { ReviewInstance } from "./review"

export interface RestaurantAttributes {
    id: number
    name: string
    description: string
    phone: string
    address: string
}

export interface RestaurantInput extends Optional<RestaurantAttributes, 'id'> {}

export interface RestaurantInstance extends Model<RestaurantAttributes, RestaurantInput>, RestaurantAttributes {
    reviews?: ReviewInstance[]
    addReview: HasManyAddAssociationMixin<ReviewInstance, number>
}

export default (sequelize: Sequelize) => {
    const Restaurant = sequelize.define<RestaurantInstance, RestaurantAttributes>('restaurants', {
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
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    // Restaurant.associate = () => {
    //     Restaurant.belongsToMany(sequelize.models.customers, {
    //         through: 'reviews'
    //     })
    // }

    return Restaurant
}