const SimpleGit = require('simple-git/promise')
const ora = require('ora')


module.exports = async (args, context) => {
    const spinner = ora('Check is git folder?').start()

    try {
        const {currentDir} = args

        const git = SimpleGit(currentDir)
        const isRepo = await git.checkIsRepo()

        if (!isRepo) {
            throw new Error('Your package is not a git folder.')
        }

        spinner.succeed('Folder is git').stop()

        return context
    } catch (e) {
        spinner.fail(e.message).stop()

        throw e
    }
}

