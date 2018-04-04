const graphql = require('graphql');
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const { GraphQLObjectType, GraphQLString } = graphql;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args, request) {
        return AuthService.signup({ ...args, req: request });
      },
    },
  },
});

module.exports = mutation;
