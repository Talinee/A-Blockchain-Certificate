import { Response,NextFunction, Router ,Request, response} from 'express'
import { request } from 'http'
import productService from 'services/product'

const router: Router = Router()

router.post('/product', async(request,response: Response, next: NextFunction) => {
    try {
        const input = request.body
        
        const product = await productService.add({
            name: input.name,
            img: input.img,
            code: input.code,
            price: input.price
        })

        response.json(product);
    }
    catch(err) {
        next(err)
    }
})

router.put('/product/:id', async(request,response: Response, next: NextFunction) => {
    try {    
        const input = request.body
        console.log(request.body);
        
        const params = request.params
        const product = await productService.update({
                name: input.name,
                img: input.img,
                code: input.code,
                price: input.price,
                id: params.id
        })
        response.json(product)
    }
        catch(err) {
            next(err)
        }
})

router.get('/product/:id', async(request,response:Response,next:NextFunction) => {
    try {
        const product = await productService.get(request.params)
        response.json(product)
    }
    catch(err) {
        next(err)
    }
})

router.get('/product', async(request,response: Response, next: NextFunction) => {
    try {
        const product = await productService.getAll()
        response.json(product)
    }
    catch(err){
        next(err)
    }
})

router.delete('/product/:id', async(request,response: Response, next: NextFunction) => {
    try {
        const product = await productService.delete(request.params)
        response.status(204).end()
    } catch (error) {
        next(err)
    }
})

export default router