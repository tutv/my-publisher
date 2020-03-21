const _getPackageJSON = require('./_getPackageJSON')
const fs = require('fs-extra')
const path = require('path')


module.exports = async (currentDir, field, value) => {
    const object = await _getPackageJSON(currentDir)

    const newObject = Object.assign({}, object, {
        [field]: value
    })

    const content = JSON.stringify(newObject, null, 2)
    const packageFile = path.join(currentDir, 'package.json')

    await fs.writeFile(packageFile, content, {encoding: 'utf8'})

    return true
}

