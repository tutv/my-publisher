const fs = require('fs-extra')
const _getFilePath = require('./_getFilePath')


module.exports = async (currentDir) => {
    const npmrc = _getFilePath(currentDir, '.npmrc')
    const exists = await fs.exists(npmrc)
    console.log('Clean .npmrc', exists)
    if (!exists) return true

    await fs.remove(npmrc)

    return true
}

