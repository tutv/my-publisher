const fs = require('fs-extra')
const _getFilePath = require('./_getFilePath')


module.exports = async (currentDir) => {
    const npmrcHidden = _getFilePath(currentDir, '.npmrc_hidden')
    const exits = await fs.exists(npmrcHidden)

    if (!exits) return true

    const npmrc = _getFilePath(currentDir, '.npmrc')
    await fs.rename(npmrcHidden, npmrc)

    return true
}

