import { Router, Request as ExpressRequest, Response as ExpressResponse, NextFunction } from 'express'
import userService from 'services/user'

const router: Router = Router()
router.get('/user', async (request, response: ExpressResponse, next: NextFunction) => {
    try {
        const user = await userService.list()
        response.json(user)
    }
    catch(err) {
        next(err)
    }
})

router.post('/user', async (request, response: ExpressResponse, next: NextFunction) => {
    try {
        const user = await userService.add({
            name: "tew",
            BTCaddress: "Ux000",
            USDTaddress: "Ux000",
            ETHaddress: "Ux000",
            TOKENaddress: "Ux000",
        })
        response.json(user)
    }
    catch(err) {
        next(err)
    }
})

export default router
