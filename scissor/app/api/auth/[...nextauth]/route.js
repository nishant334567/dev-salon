import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/app/models/User";
import { connectDB } from "@/app/lib/mongodb";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      await connectDB();
  
      const existingUser = await User.findOne({ email: user.email });
      console.log("existing user");
  
      if (!existingUser) {
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
          provider: account.provider,
        });
      }
  
      return true;
    },
  }
};
//get token extract user info and save into db
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };