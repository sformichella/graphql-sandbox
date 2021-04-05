const app = require('./app');
const request = require('supertest');

describe('GraphQL sandbox', () => {
  it('returns some authors\' names', async() => {

    // Construcut GraphQL query in exactly the same way
    // as in GraphiQL
    const query = `
      query {
        authors {
          name
        }
      }
    `

    // Send along query in 'query' param
    const response = await request(app)
      .get(`/graphql?query=${query}`)

    // Authors data lives in response -> body -> data -> authors
    const { authors } = response.body.data;

    expect(authors).toEqual([
      { name: 'J. K. Rowling' },
      { name: 'J. R. R. Tolkien' },
      { name: 'Brent Weeks' }
    ])
  });
});
