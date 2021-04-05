const express = require('express');
const app = express();
const { graphqlHTTP: GQL, graphqlHTTP } = require('express-graphql');

const { GraphQLSchema } = require('graphql');

const RootQueryType = require('./GraphQL/RootQuery');

const schema = new GraphQLSchema({
  query: RootQueryType
})

app.use('/graphql', graphqlHTTP({ 
  graphiql: true,
  schema
}));

module.exports = app;
