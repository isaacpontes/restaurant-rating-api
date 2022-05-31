import { Restaurant } from "../models"
import { RestaurantInput, RestaurantInstance } from "../models/restaurant"
import { ReviewInput } from "../models/review"

export default {
    async findAll(): Promise<RestaurantInstance[]> {
        const restaurants = await Restaurant.findAll()
        return restaurants
    },

    async save(input: RestaurantInput): Promise<RestaurantInstance> {
        const restaurant = await Restaurant.create(input)
        return restaurant
    },

    async updateById(id: number | string, input: RestaurantInput): Promise<void> {
        await Restaurant.update(input, {
            where: { id }
        })
    },

    async deleteById(id: number | string): Promise<void> {
        await Restaurant.destroy({
            where: { id }
        })
    },


    async getAverageReviews(id: number | string) {
        const restaurant = await Restaurant.findByPk(id, {
            attributes: ['id'],
            include: {
                association: 'reviews',
                attributes: [['customer_id', 'customerId'], 'stars', 'comment'],
            }
        })

        if (restaurant === null) return null

        const averageStarsReceived = restaurant.reviews
            ? restaurant.reviews.reduce((sum, review) => review.stars + sum, 0) / restaurant.reviews.length
            : 0

        return {
            restaurantId: restaurant.id,
            averageStarsReceived,
            reviews: restaurant.reviews
        }
    },
}