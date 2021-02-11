import { User, UserDoc } from 'models/User'
import config from 'config'

const thisService = {
    async add (input): Promise<{successful: boolean, message: String, }> {

        const user:UserDoc = new User()
        user.name = input.name,
        user.BTCaddress = input.BTCaddress,
        user.USDTaddress = input.USDTaddress,
        user.ETHaddress = input.ETHaddress,
        user.TOKENaddress = input.TOKENaddress,
        await user.save()

        return { successful: true, message: 'Success' }
    },
    async list (): Promise<{successful: boolean, data: UserDoc[]}> {

        const user = await User.find()

        return { successful: true, data: user }
    },
}

export default thisService
