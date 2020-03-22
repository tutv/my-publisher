const _getNewVersion = require('../core/_getNewVersion')
const _setPackageJSON = require('../core/_setPackageJSON')
const ora = require('ora')


module.exports = async (args, context) => {
    const spinner = ora('Check package version').start()

    try {
        const {version: currentVersion} = context.getValue('packageJSON')
        spinner.succeed(`Current version: ${currentVersion}`)

        const {currentDir, release} = args
        const newVersion = await _getNewVersion(currentVersion, release)
        context.setValue('newVersion', newVersion)
        await _setPackageJSON(currentDir, 'version', newVersion)

        spinner.succeed(`New version: ${newVersion}`).stop()

        return context
    } catch (e) {
        spinner.fail(e.message).stop()

        throw e
    }
}
