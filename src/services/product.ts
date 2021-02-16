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

    async get(input): Promise<{ successful: boolean, data: productDoc[] }> { 
        const product = await Product.findOne({_id:input.id}).exec()
        
        return { successful: true, data: product }
    },

    async getAll(): Promise<{ successful: boolean, data: productDoc[] }> {        
        const products = await Product.find()
        
        return { successful: true, data: products }
    },

    async update(input): Promise<{ successful: boolean, data: productDoc[]}> {
            const product = await Product.findByIdAndUpdate(
                {_id:input.id},
                {$set: {    name:input.name, 
                            img:input.img,
                            code:input.code, 
                            price:input.price
                }},
            )
            return { successful: true, data: product }
    },

    async delete(input):Promise<{ successful: boolean, message: String }> {
       try {
        const products = await Product.findByIdAndDelete({_id:input.id})
        return { successful: true, message: 'Success' }  
       } catch (e) {
        return {successful: false, message: 'error'}
       }
    }
}
export default productService