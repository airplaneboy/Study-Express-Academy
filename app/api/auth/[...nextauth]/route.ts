import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import TwitterProvider from 'next-auth/providers/twitter';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import AppleProvider from 'next-auth/providers/apple';
import { fetchPOST } from '../../../../utils/fetchOption';
import jsonResponse from '@/utils/jsonResponse';
// import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
// import clientPromise from '@/lib/mongodb';

export const authOptions: NextAuthOptions = {
  providers: [
    //OAuth Providers
    GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID!, clientSecret: process.env.GOOGLE_SECRET! }),
    FacebookProvider({ clientId: process.env.FACEBOOK_CLIENT_ID!, clientSecret: process.env.FACEBOOK_SECRET! }),
    GitHubProvider({ clientId: process.env.GITHUB_CLIENT_ID!, clientSecret: process.env.GITHUB_SECRET! }),
    TwitterProvider({ clientId: process.env.TWITTER_CLIENT_ID!, clientSecret: process.env.TWITTER_SECRET! }),
    AppleProvider({
      clientId: process.env.APPLE_ID!,
      clientSecret: process.env.APPLE_SECRET!,
    }),

    //Credential Provider
    CredentialsProvider({
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = await fetchPOST({
          data: {
            username: credentials?.username,
            email: credentials?.email,
            password: credentials?.password,
          },
          path: 'http://localhost:3000/api/v1/auth/login',
        });

        if (user) return user;

        return null;
      },
    }),
  ],

  session: { strategy: 'jwt', maxAge: 2592000 },
  jwt: { maxAge: 2592000 },
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    //Second
    async jwt({ token, user, trigger }) {
      // console.log('==============================User==============================');
      // console.log(user);
      // console.log('==============================End User==============================');

      // console.log('==============================Token==============================');
      // console.log(token);
      // console.log('==============================End Token==============================');

      // if (trigger === 'signIn' || trigger === 'signUp') token = { ...token, ...user };

      return { ...token, ...user };
      // return token;
    },

    //Last
    async session({ session, token }) {
      session.user = token;
      return session;
    },

    //First?
    async signIn({ account, profile, credentials, user }) {
      // console.log('==============================Account==============================');
      // console.log(account);
      // console.log('==============================End Account==============================');

      // console.log('==============================Profile==============================');
      // console.log(profile);
      // console.log('==============================End Profile==============================');

      // console.log('==============================Credentials==============================');
      // console.log(credentials);
      // console.log('==============================End Credentials==============================');

      // console.log('==============================User==============================');
      // console.log(user);
      // console.log('==============================End User==============================');

      if (account?.type === 'oauth') {
        const userData = {
          email: profile?.email,
          firstName: profile?.given_name,
          lastName: profile?.family_name,
          name: profile?.name,
          providerId: account?.providerAccountId,
          provider: account?.provider,
          providerType: account?.type,
        };

        const loginData = { email: profile?.email };

        try {
          const loginResponse = await fetchPOST({
            data: loginData,
            path: 'http://localhost:3000/api/v1/auth/login',
            headers: { 'X-Auth-Method': account?.type },
          });

          user.id = loginResponse?.id;
          return true;
        } catch (error: any) {
          jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
        }

        try {
          const registerResponse = await fetchPOST({
            data: userData,
            path: 'http://localhost:3000/api/v1/auth/register',
            headers: { 'X-Auth-Method': account?.type },
          });

          user.id = registerResponse?.id;
          return true;
        } catch (error: any) {
          jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');

          return false;
        }
      }

      return true;
    },
  },

  // adapter: MongoDBAdapter(clientPromise, {
  //   databaseName: 'ProvidersAuthentication',
  // }),
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
