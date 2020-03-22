const SimpleGit = require('simple-git/promise')
const ora = require('ora')


module.exports = async (args, context) => {
    const {currentDir} = args
    const git = SimpleGit(currentDir)

    const spinner = ora('Merging develop into master...').start()
    await git.checkout('master')
    await git.pull('origin', 'master')
    await git.pull('origin', 'develop')
    await git.push('origin', 'master')

    spinner.succeed('Merged develop into master').stop()

    return context
}

