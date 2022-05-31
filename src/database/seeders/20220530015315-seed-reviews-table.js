'use strict';

const { Op } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    const [customers] = await queryInterface.sequelize.query('SELECT id FROM customers')
    const [restaurants] = await queryInterface.sequelize.query('SELECT id from restaurants')

    for (let i = 0; i < customers.length; i++) {
      for (let j = 0; j < restaurants.length; j++) {
        await queryInterface.bulkInsert('reviews', [{
          customer_id: customers[i].id,
          restaurant_id: restaurants[j].id,
          stars: Math.floor(6 * Math.random()),
          comment: 'Voluptas et mollitia suscipit. Sit fuga dolores vero quia.',
          created_at: new Date(),
          updated_at: new Date()
        }])
      }
    }
  },

  async down (queryInterface, Sequelize) {
    const restaurants = await queryInterface.sequelize.query('SELECT id from restaurants')
    await queryInterface.bulkDelete('reviews', null, {
      where: {
        [Op.or]: restaurants
      }
    })
  }
};
