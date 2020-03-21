const fs = require('fs-extra')
const path = require('path')
const userHome = require('user-home')
const _getFilePath = require('./_getFilePath')


module.exports = async (currentDir) => {
    const npmrc = path.join(userHome, '.npmrc')

    const exists = await fs.exists(npmrc)
    if (!exists) return true

    const copyNPMrc = _getFilePath(currentDir, '.npmrc')
    await fs.copyFile(npmrc, copyNPMrc)

    return false
}

