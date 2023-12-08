import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDB } from '../database/connect'
import { authConfig } from './config'
import { User } from '../database/models'
import bcrypt from 'bcrypt'

const login = async (credentials) => {
   try {
      connectToDB();
      const user = await User.findOne({ username: credentials.username});
      if (!user) throw new Error('Wrong credentials!');

      const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
      if (!isPasswordCorrect) throw new Error('Wrong credentials!');

      return user;
   } catch (err) {
      console.log(err);
      throw new Error('Failed to login!');
   }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
         try {
            const user = await login(credentials);
            return user;
         } catch (err) {
            return null;
         }
      },
    }),
  ],
})