import {z} from 'zod'

export const UserSignInSchmea = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})