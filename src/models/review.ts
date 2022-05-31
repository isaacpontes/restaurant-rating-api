import { DataTypes, Model, Optional, Sequelize } from "sequelize"

export interface ReviewAttributes {
    restaurantId: number
    customerId: number
    stars: 0 | 1 | 2 | 3 | 4 | 5
    comment: string
}

export interface ReviewInput extends Optional<ReviewAttributes, 'comment'> {}

export interface ReviewInstance extends Model<ReviewAttributes, ReviewInput>, ReviewAttributes { }

export default (sequelize: Sequelize) => {
    const Review = sequelize.define<ReviewInstance, ReviewAttributes>('reviews', {
        restaurantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'restaurants',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'customers',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn: [
                    [0, 1, 2, 3, 4, 5]
                ]
            }
        },
        comment: {
            type: DataTypes.STRING
        }
    })

    // Review.associate = () => {
    //     Review.belongsTo(sequelize.models.restaurants)
    //     Review.belongsTo(sequelize.models.customers)
    // }

    return Review
}