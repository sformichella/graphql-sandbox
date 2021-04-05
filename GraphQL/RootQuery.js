const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = require('graphql');

const { BookType, AuthorType } = require('./Types');

const { books, authors } = require('../data');

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    book: {
      type: BookType,
      description: 'A single book',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => books.find(book => book.id === args.id)
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'List of books',
      resolve: () => books
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of authors',
      resolve: () => authors
    },
    author: {
      type: AuthorType,
      description: 'A single author',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => authors.find(a => a.id === args.id)
    }
  })
});

module.exports = RootQueryType;
