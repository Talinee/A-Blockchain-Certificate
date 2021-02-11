import { Product, productDoc } from 'models/Product'

const productService = {
    async add(input): Promise<{ successful: boolean, message: String }> {
        try {
                const product: productDoc = new Product()
                product.productName = input.name
                product.productImg = input.img
                product.productCode = input.code
                product.price = input.price
                await product.save()

                return { successful: true, message: 'Success' }   
        } catch(e) {
            return {successful: false, message: 'error'}
        }
    },
    async view(input): Promise<{ successful: boolean, data: productDoc[] }> {        
        const products = await Product.find({productCode:input.id}).exec()
        
        return { successful: true, data: products }
    }
}
export default productService