import { faker } from '@faker-js/faker';

function generateEmail() {
  const email = `${faker.random.word()}${faker.random.numeric()}@gmail.com`;

  return { email };
};

module.exports = { generateEmail };
