import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { login } from '@/api/rest/auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const res = await login({ email, password });
        const { data } = await res.json();
        const { accessToken, user } = data;
        if (user) {
          return {
            ...user,
            name: `${user.firstName} ${user.lastName}`,
            image: '',
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};
export default NextAuth(authOptions);
