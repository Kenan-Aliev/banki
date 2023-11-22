import type { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        phone: { label: 'phone', type: 'text' },
        password: { label: 'password', type: 'text' },
      },
      async authorize() {
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
};
