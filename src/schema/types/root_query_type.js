const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLList } = graphql;
const UserType = require('./user_type');
const mongoose = require('mongoose');




const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
  }
});

module.exports = RootQueryType;
