const SimpleGit = require('simple-git/promise')
const _getPackageJSONPath = require('../core/_getPackageJSONPath')


module.exports = async (args, context) => {
    const {currentDir, message} = args
    const git = SimpleGit(currentDir)
    const packageJSON = _getPackageJSONPath(currentDir)

    console.log('Commit:', message)
    await git.add(packageJSON)
    await git.commit(message)
    await git.pull('origin', 'develop')
    await git.push('origin', 'develop')
    console.log('Pushed develop.')

    return context
}
