const isDirectory = require('../helpers/is-directory')
const _getPackageJSON = require('../core/_getPackageJSON')
const ora = require('ora')


module.exports = async (args, context) => {
    const spinner = ora('Check node package:').start()

    try {
        const {currentDir} = args
        await isDirectory(currentDir)
        const packageObj = await _getPackageJSON(currentDir)

        const {name} = Object.assign({}, packageObj)
        if (!name) {
            throw new Error('Package name is empty.')
        }

        spinner.succeed(`Detect package: ${name}`).stop()
        context.setValue('packageJSON', packageObj)

        return context
    } catch (e) {
        spinner.fail(e.message).stop()

        throw e
    }
}

