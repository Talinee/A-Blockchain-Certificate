import { Response,NextFunction, Router ,Request, response} from 'express'
import { request } from 'http'
import productService from 'services/product'

const router: Router = Router()

router.post('/product', async(request,response: Response, next: NextFunction) => {
    try {
        const input = request.body
        console.log('ทำ');
        
        const product = await productService.add({
            name: input.name,
            img: input.img,
            code: input.code,
            price: input.price
        })

        response.json(product)
    }
    catch(err) {
        next(err)
    }
})

router.get('/product/:id', async(request,response:Response,next:NextFunction) => {
    try {
        const product = await productService.view(request.params)
        response.json(product)
    }
    catch(err) {
        next(err)
    }
})

router.get('/product', async(request,response: Response, next: NextFunction) => {
    try {
        const product = await productService.view(response)
        response.status(200).send(product);
        console.log(product);
    }
    catch(err){
        next(err)
    }
})

export default router