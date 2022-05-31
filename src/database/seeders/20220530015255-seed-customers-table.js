'use strict';

const { Op } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', [{
      name: 'Customer 1',
      phone: '1111-1111',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Customer 2',
      phone: '2222-2222',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Customer 3',
      phone: '3333-3333',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Customer 4',
      phone: '4444-4444',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Customer 5',
      phone: '5555-5555',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {
      where: {
        [Op.or]: [
          { name: 'Customer 1'},
          { name: 'Customer 2'},
          { name: 'Customer 3'},
          { name: 'Customer 4'},
          { name: 'Customer 5'},
        ]
      }
    })
  }
};
