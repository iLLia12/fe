import * as Types from '../../@types/types';

import { gql } from '@apollo/client';
export type PostPropertiesFragment = {
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

export const PostPropertiesFragmentDoc = gql`
  fragment PostProperties on Post {
    id
    title
    body
    user {
      id
      firstName
      lastName
    }
  }
`;
