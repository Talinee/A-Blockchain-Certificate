import { User, UserProps } from 'models/User'
import { generatePasswordHash } from 'helpers/passwordHash'

export default async () => {
    const users: Partial<UserProps>[] = [
        {
            username: 'admin01',
            passwordHash: await generatePasswordHash('password'),
        },
        {
            username: 'admin02',
            passwordHash: await generatePasswordHash('password'),
        },
        {
            username: 'admin03',
            passwordHash: await generatePasswordHash('password'),
        },
        {
            username: 'admin04',
            passwordHash: await generatePasswordHash('password'),
        },
        {
            username: 'admin05',
            passwordHash: await generatePasswordHash('password'),
        },
        {
            username: 'admin06',
            passwordHash: await generatePasswordHash('password'),
        },
        {
            username: 'admin07',
            passwordHash: await generatePasswordHash('password'),
        },
        {
            username: 'admin08',
            passwordHash: await generatePasswordHash('password'),
        },
        {
            username: 'admin09',
            passwordHash: await generatePasswordHash('password'),
        },
        {
            username: 'admin10',
            passwordHash: await generatePasswordHash('password'),
        },
    ]

    await User.collection.insertMany(users)
}
