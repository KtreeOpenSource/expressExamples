const Storage = require('./config');
let path = require('path');
let fs = require('fs');

exports.uploadImage = async () => {
    const file = req.files.selectedFile;
    const targetFolder = path.join(__dirname, "./uploads");
    const targetPath = path.join(targetFolder, `/${new Date().getTime()}_${file.name}`);
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }
    fs.writeFileSync(targetPath, file.data)
    let destination = `testFolder/${Date.now()}.png`
    let a = await Storage.bucket().upload(targetPath, {
        destination: destination,
        gzip: true,
        metadata: {
            cacheControl: 'public, max-age=31536000'
        }
    });

    fs.unlinkSync(targetPath)

}