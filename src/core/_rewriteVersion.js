const _getPackageJSON = require('./_getPackageJSON')
const _setPackageJSON = require('./_setPackageJSON')



module.exports = async (currentDir, newVersion) => {
    const packageJSON = await _getPackageJSON(currentDir)

    const content = JSON.stringify(newPackageJSON, null, 2)

    const newPackageJSON = Object.assign({}, packageJSON, {
        version: newVersion
    })
}
