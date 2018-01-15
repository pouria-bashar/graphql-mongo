const graphql = require('graphql');


const { GraphQLString, GraphQLObjectType, GraphQLList, GraphQLFloat } = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
      },
      resolve(parentvalue, { email, password, firstName, lastName }, req) {
        return AuthService.signup({ email, password, firstName, lastName, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentvalue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentvalue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    },
  }
})


module.exports = mutation;
