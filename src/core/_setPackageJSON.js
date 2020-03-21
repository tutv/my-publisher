const _getPackageJSON = require('./_getPackageJSON')
const _getPackageJSONPath = require('./_getPackageJSONPath')
const fs = require('fs-extra')


module.exports = async (currentDir, field, value) => {
    const object = await _getPackageJSON(currentDir)

    const newObject = Object.assign({}, object, {
        [field]: value
    })

    const content = JSON.stringify(newObject, null, 2)
    const packageFile = _getPackageJSONPath(currentDir)
    await fs.writeFile(packageFile, content, {encoding: 'utf8'})

    return true
}

