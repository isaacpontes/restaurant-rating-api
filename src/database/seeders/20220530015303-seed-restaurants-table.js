'use strict';

const { Op } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [{
      name: 'Restaurant 1',
      description: 'Ducimus dolorum omnis iure fuga. Dicta ut odio similique debitis illum qui dolorem vitae.',
      phone: '1111-1111',
      address: 'Address 1',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Restaurant 2',
      description: 'Ducimus dolorum omnis iure fuga. Dicta ut odio similique debitis illum qui dolorem vitae.',
      phone: '2222-2222',
      address: 'Address 2',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Restaurant 3',
      description: 'Ducimus dolorum omnis iure fuga. Dicta ut odio similique debitis illum qui dolorem vitae.',
      phone: '3333-3333',
      address: 'Address 3',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {
      where: {
        [Op.or]: [
          { name: 'Restaurant 1'},
          { name: 'Restaurant 2'},
          { name: 'Restaurant 3'}
        ]
      }
    })
  }
};
