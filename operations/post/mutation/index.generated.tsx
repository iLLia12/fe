import * as Types from '../../../@types/types';

import { gql } from '@apollo/client';
import { PostPropertiesFragmentDoc } from '../index.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreatePostMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  body: Types.Scalars['String'];
  isActive: Types.Scalars['Boolean'];
}>;

export type CreatePostMutation = {
  __typename?: 'Mutation';
  storePost: {
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
  };
};

export const CreatePostDocument = gql`
  mutation CreatePost($title: String!, $body: String!, $isActive: Boolean!) {
    storePost(
      newPostData: { title: $title, body: $body, isActive: $isActive }
    ) {
      ...PostProperties
    }
  }
  ${PostPropertiesFragmentDoc}
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      isActive: // value for 'isActive'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    options
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult =
  Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
