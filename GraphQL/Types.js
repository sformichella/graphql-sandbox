const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

const { books, authors } = require('../data');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'Represents an author',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: { 
      type: new GraphQLList(BookType),
      resolve: (author) => {
        return books.filter(book => book.authorId === author.id)
      }
    }
  })
});

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Represents an book',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authors: { 
      type: new GraphQLList(AuthorType),
      resolve: (authors) => {
        return authors.filter(author => author.authorsId === author.id)
      }
    }
  })
});

module.exports = { BookType, AuthorType };
