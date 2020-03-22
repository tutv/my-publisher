const _getNewVersion = require('../core/_getNewVersion')
const _setPackageJSON = require('../core/_setPackageJSON')


module.exports = async (args, context) => {
    const {version: currentVersion} = context.getValue('packageJSON')
    console.log('currentVersion:', currentVersion)

    const {currentDir, release} = args

    const newVersion = await _getNewVersion(currentVersion, release)
    console.log('newVersion', newVersion)
    context.setValue('newVersion', newVersion)

    await _setPackageJSON(currentDir, 'version', newVersion)

    return context
}
