import * as Types from '../../../@types/types';

import { gql } from '@apollo/client';
import { UserAllPropertiesFragmentDoc } from '../index.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type StoreUserMutationVariables = Types.Exact<{
  firstName: Types.Scalars['String'];
  lastName: Types.Scalars['String'];
  username: Types.Scalars['String'];
  email: Types.Scalars['String'];
}>;

export type StoreUserMutation = {
  __typename?: 'Mutation';
  storeUser: {
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

export type UpdateUserMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  firstName?: Types.InputMaybe<Types.Scalars['String']>;
  lastName?: Types.InputMaybe<Types.Scalars['String']>;
  username?: Types.InputMaybe<Types.Scalars['String']>;
  email?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser: {
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

export type RemoveUserMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type RemoveUserMutation = {
  __typename?: 'Mutation';
  removeUser: boolean;
};

export const StoreUserDocument = gql`
  mutation StoreUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
  ) {
    storeUser(
      newUserData: {
        firstName: $firstName
        lastName: $lastName
        username: $username
        email: $email
      }
    ) {
      ...UserAllProperties
    }
  }
  ${UserAllPropertiesFragmentDoc}
`;
export type StoreUserMutationFn = Apollo.MutationFunction<
  StoreUserMutation,
  StoreUserMutationVariables
>;

/**
 * __useStoreUserMutation__
 *
 * To run a mutation, you first call `useStoreUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStoreUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [storeUserMutation, { data, loading, error }] = useStoreUserMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useStoreUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    StoreUserMutation,
    StoreUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<StoreUserMutation, StoreUserMutationVariables>(
    StoreUserDocument,
    options
  );
}
export type StoreUserMutationHookResult = ReturnType<
  typeof useStoreUserMutation
>;
export type StoreUserMutationResult = Apollo.MutationResult<StoreUserMutation>;
export type StoreUserMutationOptions = Apollo.BaseMutationOptions<
  StoreUserMutation,
  StoreUserMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation UpdateUser(
    $id: String!
    $firstName: String
    $lastName: String
    $username: String
    $email: String
  ) {
    updateUser(
      userData: {
        id: $id
        firstName: $firstName
        lastName: $lastName
        username: $username
        email: $email
      }
    ) {
      ...UserAllProperties
    }
  }
  ${UserAllPropertiesFragmentDoc}
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const RemoveUserDocument = gql`
  mutation RemoveUser($id: String!) {
    removeUser(id: $id)
  }
`;
export type RemoveUserMutationFn = Apollo.MutationFunction<
  RemoveUserMutation,
  RemoveUserMutationVariables
>;

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserMutation, { data, loading, error }] = useRemoveUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveUserMutation,
    RemoveUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveUserMutation, RemoveUserMutationVariables>(
    RemoveUserDocument,
    options
  );
}
export type RemoveUserMutationHookResult = ReturnType<
  typeof useRemoveUserMutation
>;
export type RemoveUserMutationResult =
  Apollo.MutationResult<RemoveUserMutation>;
export type RemoveUserMutationOptions = Apollo.BaseMutationOptions<
  RemoveUserMutation,
  RemoveUserMutationVariables
>;
