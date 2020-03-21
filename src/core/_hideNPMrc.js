const fs = require('fs-extra')
const _getFilePath = require('./_getFilePath')


module.exports = async (currentDir) => {
    const npmrc = _getFilePath(currentDir, '.npmrc')

    const exits = await fs.exists(npmrc)

    if (!exits) return true

    const npmrcHidden = _getFilePath(currentDir, '.npmrc_hidden')
    await fs.rename(npmrc, npmrcHidden)

    return true
}

