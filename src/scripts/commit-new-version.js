const SimpleGit = require('simple-git/promise')
const _getPackageJSONPath = require('../core/_getPackageJSONPath')
const ora = require('ora')


module.exports = async (args, context) => {
    const {currentDir, message} = args
    const spinner = ora(`Committing...`).start()

    const git = SimpleGit(currentDir)
    const packageJSON = _getPackageJSONPath(currentDir)


    await git.add(packageJSON)
    await git.commit(message)
    spinner.succeed(`Committed with message: ${message}`)


    spinner.start(`git push origin develop`)
    await git.push('origin', 'develop')
    spinner.succeed(`git push origin develop`).stop()

    return context
}
