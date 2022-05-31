import { Customer } from "../models"
import { CustomerInput, CustomerInstance } from "../models/customer"

export default {
    async findAll(): Promise<CustomerInstance[]> {
        const customers = await Customer.findAll()
        return customers
    },

    async save(input: CustomerInput): Promise<CustomerInstance> {
        const customer = await Customer.create(input)
        return customer
    },

    async updateById(id: number | string, input: CustomerInput): Promise<void> {
        await Customer.update(input, {
            where: { id }
        })
    },

    async deleteById(id: number | string): Promise<void> {
        await Customer.destroy({
            where: { id }
        })
    },

    async getAverageReviews(id: number | string) {
        const customer = await Customer.findByPk(id, {
            attributes: ['id'],
            include: {
                association: 'reviews',
                attributes: [['restaurant_id', 'restaurantId'], 'stars', 'comment'],
            }
        })

        if (customer === null) return null

        const averageStarsGiven = customer.reviews
            ? customer.reviews.reduce((sum, review) => review.stars + sum, 0) / customer.reviews.length
            : 0

        return {
            customerId: customer.id,
            averageStarsGiven,
            reviews: customer.reviews
        }
    }
}