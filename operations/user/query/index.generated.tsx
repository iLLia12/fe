import * as Types from '../../../@types/types';

import { gql } from '@apollo/client';
import {
  UserBasicPropertiesFragmentDoc,
  UserAllPropertiesFragmentDoc,
} from '../index.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: 'Query';
  users: Array<{
    __typename?: 'UserEntity';
    id: string;
    firstName?: string | null;
    lastName?: string | null;
  }>;
};

export type UsersFullInfoQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UsersFullInfoQuery = {
  __typename?: 'Query';
  users: Array<{
    __typename?: 'UserEntity';
    username: string;
    email?: string | null;
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    posts: Array<{
      __typename?: 'Post';
      id: string;
      title: string;
      body: string;
      user: {
        __typename?: 'UserEntity';
        id: string;
        firstName?: string | null;
        lastName?: string | null;
      };
    }>;
  }>;
};

export type UserFullInfoQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type UserFullInfoQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'UserEntity';
    username: string;
    email?: string | null;
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    posts: Array<{
      __typename?: 'Post';
      id: string;
      title: string;
      body: string;
      user: {
        __typename?: 'UserEntity';
        id: string;
        firstName?: string | null;
        lastName?: string | null;
      };
    }>;
  };
};

export const UsersDocument = gql`
  query Users {
    users {
      ...UserBasicProperties
    }
  }
  ${UserBasicPropertiesFragmentDoc}
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const UsersFullInfoDocument = gql`
  query UsersFullInfo {
    users {
      ...UserAllProperties
    }
  }
  ${UserAllPropertiesFragmentDoc}
`;

/**
 * __useUsersFullInfoQuery__
 *
 * To run a query within a React component, call `useUsersFullInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersFullInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersFullInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersFullInfoQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UsersFullInfoQuery,
    UsersFullInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersFullInfoQuery, UsersFullInfoQueryVariables>(
    UsersFullInfoDocument,
    options
  );
}
export function useUsersFullInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersFullInfoQuery,
    UsersFullInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersFullInfoQuery, UsersFullInfoQueryVariables>(
    UsersFullInfoDocument,
    options
  );
}
export type UsersFullInfoQueryHookResult = ReturnType<
  typeof useUsersFullInfoQuery
>;
export type UsersFullInfoLazyQueryHookResult = ReturnType<
  typeof useUsersFullInfoLazyQuery
>;
export type UsersFullInfoQueryResult = Apollo.QueryResult<
  UsersFullInfoQuery,
  UsersFullInfoQueryVariables
>;
export const UserFullInfoDocument = gql`
  query UserFullInfo($id: String!) {
    user(id: $id) {
      ...UserAllProperties
    }
  }
  ${UserAllPropertiesFragmentDoc}
`;

/**
 * __useUserFullInfoQuery__
 *
 * To run a query within a React component, call `useUserFullInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFullInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFullInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserFullInfoQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserFullInfoQuery,
    UserFullInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserFullInfoQuery, UserFullInfoQueryVariables>(
    UserFullInfoDocument,
    options
  );
}
export function useUserFullInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserFullInfoQuery,
    UserFullInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserFullInfoQuery, UserFullInfoQueryVariables>(
    UserFullInfoDocument,
    options
  );
}
export type UserFullInfoQueryHookResult = ReturnType<
  typeof useUserFullInfoQuery
>;
export type UserFullInfoLazyQueryHookResult = ReturnType<
  typeof useUserFullInfoLazyQuery
>;
export type UserFullInfoQueryResult = Apollo.QueryResult<
  UserFullInfoQuery,
  UserFullInfoQueryVariables
>;
