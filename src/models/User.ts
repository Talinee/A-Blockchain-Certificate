import { createSchema, Type, ExtractDoc, ExtractProps } from 'ts-mongoose'
import createModel from './createModel'

const schema = createSchema(
    {
        name: Type.string({ require: false }),
        BTCaddress: Type.string({ require: false }),
        USDTaddress: Type.string({ require: false }),
        ETHaddress: Type.string({ require: false }),
        TOKENaddress: Type.string({ require: false }),
    },
    {
        timestamps: true,
    },
)

export const { model: User } = createModel('User', schema, { enableHardDelete: false })
export const UserSchema = schema
export type UserDoc = ExtractDoc<typeof schema>
export type UserProps = ExtractProps<typeof schema>
