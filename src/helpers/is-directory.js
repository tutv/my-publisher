const fs = require('fs-extra')


module.exports = async (dir = '') => {
    const exists = await fs.exists(dir)
    if (!exists) {
        throw new Error('Folder does not exist.')
    }

    const stats = await fs.lstat(dir)
    const isDirectory = stats.isDirectory()
    if (!isDirectory) {
        throw new Error('Your path is not a directory.')
    }

    return true
}

