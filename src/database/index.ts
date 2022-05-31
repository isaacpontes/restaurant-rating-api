import { Sequelize } from "sequelize"

export function connect() {
    const databaseUrl = process.env.DATABASE_URL

    if (!databaseUrl) throw new Error('Invalid DATABASE_URL')

    const sequelize = new Sequelize(databaseUrl, {
        define: {
            underscored: true
        },
        ssl: process.env.NODE_ENV === 'production',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })

    return sequelize
}