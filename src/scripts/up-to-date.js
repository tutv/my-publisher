const SimpleGit = require('simple-git/promise')
const ora = require('ora')


module.exports = async (args, context) => {
    const {currentDir} = args
    const spinner = ora(`Check develop up-to-date...`).start()

    const git = SimpleGit(currentDir)

    spinner.start(`git pull origin develop`)
    await git.pull('origin', 'develop')
    spinner.succeed(`develop branch is up-to-date now.`).stop()

    return context
}
