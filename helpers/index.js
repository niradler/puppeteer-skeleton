var fs = require('fs');

const createCacheFolder = () => {
    const dir = './cache';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

module.exports = {
    createCacheFolder
}