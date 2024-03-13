"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'Luiz 1',
        email: 'luiz1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz 2',
        email: 'luiz2@gmail.com',
        password_hash: await bcryptjs.hash('97531', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
