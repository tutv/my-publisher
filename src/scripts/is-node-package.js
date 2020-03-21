const isDirectory = require('../helpers/is-directory')
const _getPackageJSON = require('../core/_getPackageJSON')


module.exports = async (args, context) => {
    const {currentDir} = args
    await isDirectory(currentDir)
    const packageObj = await _getPackageJSON(currentDir)

    const {name} = Object.assign({}, packageObj)
    if (!name) {
        throw new Error('Package name is empty.')
    }

    console.log('Detect package:', name)
    context.setValue('packageJSON', packageObj)

    return context
}

