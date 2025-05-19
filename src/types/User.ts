import { z } from 'zod';

const AddressSchema = z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(2),
    zip: z.string().min(1),
})

const UserSchema = z.object({
    id: z.string(),
    user_name: z.string().min(1),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    email: z.string().email(),
    address: AddressSchema,
});

export type User = z.infer<typeof UserSchema>;