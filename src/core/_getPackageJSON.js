const fs = require('fs-extra')
const path = require('path')


module.exports = async (currentDir) => {
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
}

