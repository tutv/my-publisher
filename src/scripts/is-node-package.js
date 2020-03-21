const isDirectory = require('../helpers/is-directory')
const path = require('path')
const fs = require('fs-extra')


const _getPackageJSON = async (currentDir) => {
    const packageFile = path.join(currentDir, 'package.json')

    const exists = await fs.exists(packageFile)

    if (!exists) {
        throw new Error('Your folder is not a node package.')
    }

    const content = await fs.readFile(packageFile, {encoding: 'utf8'})

    try {
        return JSON.parse(content)
    } catch (e) {
        throw new Error(`Parse package.json failed: ${e.message}`)
    }

    return true
}


module.exports = async (args) => {
    const {currentDir} = args
    await isDirectory(currentDir)
    const packageObj = await _getPackageJSON(currentDir)

    const {name} = Object.assign({}, packageObj)
    if (!name) {
        throw new Error('Package name is empty.')
    }

    console.log('Detect package:', name)

    return true
}

