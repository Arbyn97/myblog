 import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email or Phone",
      credentials: {
        identifier: { label: "Email or Phone", type: "text" },
        user:{label:"username", type:"text"}
      },
      async authorize(credentials) {
        const identifier = credentials?.identifier;
        const username=credentials?.user;
//خط بالا داره میگه اگر وجود داشت بریز این تو اگر وجود ندشات بدون اینکه خطایی بدی و روند برنامه رو به هم بریزی فقط مقدارش رو آندیفایند یا نال بذار
        if (!identifier) return null;

        // تشخیص ایمیل یا شماره
        const isEmail = identifier.includes("@");

        // اینجا معمولاً دیتابیس چک میشه
        const user = {
          id: "1",
          email: isEmail ? identifier : null,
          phone: !isEmail ? identifier : null,
          username:username
        };

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
