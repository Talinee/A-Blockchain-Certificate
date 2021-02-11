import {createSchema,ExtractDoc,Type} from 'ts-mongoose'
import createModel from './createModel'

const schema = createSchema(
    {
        productName: Type.string({require: false}),
        productImg: Type.string({require: false}),
        productCode: Type.string({require: false}),
        price: Type.number({require: false}),
    }
)

export const {model: Product} = createModel('Product',schema, {enableHardDelete:false})
export type productDoc = ExtractDoc<typeof schema>
