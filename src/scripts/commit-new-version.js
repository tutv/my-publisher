const SimpleGit = require('simple-git/promise')
const _getPackageJSONPath = require('../core/_getPackageJSONPath')
const ora = require('ora')


module.exports = async (args, context) => {
    const {publishOnly} = args
    if (publishOnly === 'enabled') return context

    const spinner = ora(`Committing...`).start()

    try {
        const {currentDir, message} = args

        const git = SimpleGit(currentDir)
        const packageJSON = _getPackageJSONPath(currentDir)


        await git.add(packageJSON)
        await git.commit(message)
        spinner.succeed(`Committed with message: ${message}`)


        spinner.start(`git push origin develop`)
        await git.push('origin', 'develop')
        spinner.succeed(`git push origin develop`).stop()

        return context
    } catch (e) {
        spinner.fail(e.message).stop()

        throw e
    }
}
