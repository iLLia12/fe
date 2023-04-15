export const route = (
  ...params: (string | number | undefined)[]
): string | never => {
  switch (params[0]) {
    case 'home':
      return `/`;

    //users
    case 'users':
      return `/users`;
    case 'users.create':
      return `/users/create`;
    case 'users.show':
      return `/users/${params[1]}/show`;
    case 'users.edit':
      return `/users/${params[1]}/edit`;

    //Posts
    case 'posts':
      return `/posts`;
    case 'posts.create':
      return `/posts/create`;

    default:
      throw new Error("Route doesn't exist");
  }
};
