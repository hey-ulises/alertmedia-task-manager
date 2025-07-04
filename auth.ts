import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { User } from '@/types/User';

async function getUser(email: string): Promise<User | undefined> {
    try {
        const users: User[] = await fetch(`http://localhost:3001/people?email=${email}`)
            .then(res => res.json())
            .then(data => 
                data.map((user: any) => ({
                    ...user,
                    id: String(user.id),
                }))
            );
        
            return users.find(user => user.email === email);
    } catch (error) {
        console.error('Failed to fetch user: ', error);
        throw new Error('Failed to fetch user.');
    }
}

export const authOptions = {
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string() })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);

                    if (!user) {
                        return null;
                    }               

                    if (password === '123456') {
                        return user;
                    }
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
};
 
export const { auth, signIn, signOut } = NextAuth(authOptions);
