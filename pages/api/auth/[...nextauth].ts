import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy:'jwt'
    },
    providers: [
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                username: {},
                password: {}
            },
            async authorize(credentials, req)
            {
                if(credentials?.username === 'admin' && credentials?.password === 'password')
                    return {id:'1', name:'ExitLinks', email:''}
                return null;
            }
        })
    ]
})

export default handler;