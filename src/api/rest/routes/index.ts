import { Express } from 'express'
import user from './user'
import product from './product'

export default (app: Express) => {
    app.use('/api', user)
    app.use('/api', product)
}
