/* eslint-disable no-underscore-dangle */

import faker from 'faker';

import Tweet from '../models/Tweet';
import User from '../models/User';

const TWEETS_TOTAL = 1;
const USERS_TOTAL = 5;

export default async () => {
  try {
    await Tweet.remove();
    await User.remove();

    await Array.from({ length: USERS_TOTAL }).forEach(async (_, i) => {
      const user = await User.create({
        username: faker.internet.userName(),
        fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        avatar: `https://api.adorable.io/avatars/285/${i}6.png`,
        password: 'password123',
      });

      await Array.from({ length: TWEETS_TOTAL }).forEach(async () => {
        Tweet.create({ text: faker.lorem.sentence(), user: user._id });
      });
    });
  } catch (error) {
    throw error;
  }
};
