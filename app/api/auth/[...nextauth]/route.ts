import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import TwitterProvider from 'next-auth/providers/twitter';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import AppleProvider from 'next-auth/providers/apple';
import { fetchPOST } from '../../../../utils/fetchOption';
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
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (trigger === 'signIn' || trigger === 'signUp') token = { ...token, ...user };

      return token;
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },

    async signIn({ account, profile, credentials, user }) {
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
          await fetchPOST({
            data: loginData,
            path: 'http://localhost:3000/api/v1/auth/login',
            headers: { 'X-Auth-Method': account?.type },
          });

          return true;
        } catch (error) {
          console.log(error);
        }

        try {
          await fetchPOST({
            data: userData,
            path: 'http://localhost:3000/api/v1/auth/register',
            headers: { 'X-Auth-Method': account?.type },
          });

          return true;
        } catch (error) {
          console.log(error);
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
