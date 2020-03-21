const _getNewVersion = require('../core/_getNewVersion')
const _setPackageJSON = require('../core/_setPackageJSON')


module.exports = async (args, context) => {
    const {version: currentVersion, name: packageName} = context.getValue('packageJSON')
    console.log('currentVersion:', currentVersion)

    const newVersion = await _getNewVersion(currentVersion, packageName)
    console.log('newVersion', newVersion)
    context.setValue('newVersion', newVersion)

    const {currentDir} = args
    await _setPackageJSON(currentDir, 'version', newVersion)

    return context
}
