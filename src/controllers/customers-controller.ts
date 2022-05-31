import { Request, Response } from "express";
import customerService from "../services/customer-service";

export default {
    async index(req: Request, res: Response) {
        try {
            const customers = await customerService.findAll()
            return res.json(customers)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    async save(req: Request, res: Response) {
        const { name, phone } = req.body
        try {
            const customer = await customerService.save({ name, phone })
            return res.status(201).json(customer)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params
        const { name, phone } = req.body
        try {
            await customerService.updateById(id, { name, phone })
            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params
        try {
            await customerService.deleteById(id)
            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    async reviews(req: Request, res: Response) {
        const { id } = req.params
        try {
            const customer = await customerService.getAverageReviews(id)
            if (customer === null) return res.status(404).json({ message: 'customer not found' })
            return res.json(customer)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}