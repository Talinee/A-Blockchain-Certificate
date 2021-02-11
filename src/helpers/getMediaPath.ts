import AWS from 'aws-sdk'
import config from 'config'

const spacesEndpoint = new AWS.Endpoint(config.dospaces.endpoint)
const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: config.dospaces.key,
    secretAccessKey: config.dospaces.secret,
    region: 'sgp1',
})

export default (mediaName: string): string => {
    // const expireSeconds = 60 * 5
    const url = s3.getSignedUrl('getObject', {
        Bucket: config.dospaces.bucket,
        Key: mediaName,
        // Expires: expireSeconds,
    })

    return url
}
