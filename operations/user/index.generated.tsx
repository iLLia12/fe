import * as Types from '../../@types/types';

import { gql } from '@apollo/client';
import { PostPropertiesFragmentDoc } from '../post/index.generated';
export type UserBasicPropertiesFragment = {
  __typename?: 'UserEntity';
  id: string;
  firstName?: string | null;
  lastName?: string | null;
};

export type UserAllPropertiesFragment = {
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

export const UserBasicPropertiesFragmentDoc = gql`
  fragment UserBasicProperties on UserEntity {
    id
    firstName
    lastName
  }
`;
export const UserAllPropertiesFragmentDoc = gql`
  fragment UserAllProperties on UserEntity {
    ...UserBasicProperties
    username
    email
    posts {
      ...PostProperties
    }
  }
  ${UserBasicPropertiesFragmentDoc}
  ${PostPropertiesFragmentDoc}
`;
