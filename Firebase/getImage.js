const Storage = require('./config');

exports.getImage = async () => {
    let f = await Storage.bucket().file(destination)
    let signedURLs = await f.getSignedUrl({
        action: 'read',
        expires: '03-09-2491'
    })
    let signedURL = signedURLs[0]
    let imageB64WithMetaData;
    let contentType;
    try {
        let imgResponse = await axios.get(signedURL, { responseType: 'arraybuffer' })
        let imageB64 = Buffer.from(imgResponse.data, 'base64').toString('base64')
        contentType = imgResponse.headers['content-type'].toLowerCase()
        imageB64WithMetaData = `data:${contentType};base64,${imageB64}`;
        return { data: imageB64WithMetaData, contentType: contentType }
    } catch (error) {
        return error;
    }
}