import apolloClient from '../../../services/apollo-client';
import {
  UserFullInfoDocument,
  UsersDocument,
  UsersFullInfoDocument,
} from '../../../operations/user/query/index.generated';
import {
  UserAllPropertiesFragment,
  UserBasicPropertiesFragment,
} from '../../../operations/user/index.generated';

export const getUsersBasicInfo = async (): Promise<
  UserBasicPropertiesFragment[]
> => {
  const {
    data: { users },
  } = await apolloClient.query({
    query: UsersDocument,
  });
  return users;
};

export const getUsersFullInfo = async (): Promise<
  UserAllPropertiesFragment[]
> => {
  const {
    data: { users },
  } = await apolloClient.query({
    query: UsersFullInfoDocument,
  });
  return users;
};

export const getUserFullInfo = async (
  id: string
): Promise<UserAllPropertiesFragment> => {
  const {
    data: { user },
  } = await apolloClient.query({
    query: UserFullInfoDocument,
    variables: { id },
  });
  return user;
};
