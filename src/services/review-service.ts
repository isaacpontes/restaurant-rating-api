import { Review } from "../models";
import { ReviewInput, ReviewInstance } from "../models/review";

export default {
    async save(input: ReviewInput): Promise<ReviewInstance> {
        const review = await Review.create(input)
        return review
    },

    async updateByRestaurantId(input: ReviewInput) {
        await Review.update(input, {
            where: {
                customerId: input.customerId,
                restaurantId: input.restaurantId
            }
        })
    }
}