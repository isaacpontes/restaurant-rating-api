import { connect } from "../database";
import customer from "./customer";
import restaurant from "./restaurant";
import review from "./review";

const sequelize = connect()

const Customer = customer(sequelize)
const Restaurant = restaurant(sequelize)
const Review = review(sequelize)

Customer.hasMany(Review)
Restaurant.hasMany(Review)
Review.belongsTo(Customer)
Review.belongsTo(Restaurant)

export {
    sequelize,
    Customer,
    Restaurant,
    Review
}