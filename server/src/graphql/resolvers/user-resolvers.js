import User from '../../models/User';
import { requireAuth } from '../../services/auth';

export default {
  signup: async (_, args) => {
    const user = await User.create({ ...args });

    return {
      token: user.createToken(),
    };
  },

  login: async (_, { email, password }) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('User not exist!');
      }
      if (!user.authenticateUser(password)) {
        throw new Error('Password not match!');
      }

      return {
        token: user.createToken(),
      };
    } catch (error) {
      throw error;
    }
  },

  me: async (_, args, { user }) => {
    try {
      const me = await requireAuth(user);

      return me;
    } catch (error) {
      throw error;
    }
  },
};
