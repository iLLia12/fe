import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  //const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbWUxMkBzb21lLmNvbSIsImlkIjoxNSwiZXhwaXJhdGlvbkRhdGUiOjE2ODA3MDk4NDIsInR0bCI6IjEgZGF5cyIsImlhdCI6MTY4MDYyMzQ0Mn0.3IZXEuUWBXZvwjRQksce6o0Pw9d0nptXLT-2Hs_XndM`,
    },
  };
});

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({ resultCaching: false }),
});

// export default new ApolloClient({
//   uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
//   cache: new InMemoryCache({ resultCaching: false }),
//   headers: {
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbWUxMkBzb21lLmNvbSIsInN1YiI6MTUsImlhdCI6MTY4MDQ0NDgyM30.YIGjCADMX_96YpMCjydco_mWTPufkTgDsmU0JNQfCxU',
//   },
// });
