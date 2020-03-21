const _getNewVersion = require('../core/_getNewVersion')


module.exports = async (args, context) => {
    const {version: currentVersion, name: packageName} = context.getValue('packageJSON')
    console.log('currentVersion:', currentVersion)

    const newVersion = await _getNewVersion(currentVersion, packageName)
    console.log('newVersion', newVersion)

    return context
}
