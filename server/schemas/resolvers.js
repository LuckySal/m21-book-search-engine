const { User } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const currentUser = await User.findById(context.user.id).select(
          "-__v -password"
        );
        return currentUser;
      }
    },
  },
  Mutation: {},
};

module.exports = resolvers;
