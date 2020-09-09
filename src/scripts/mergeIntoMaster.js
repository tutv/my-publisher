const SimpleGit = require('simple-git/promise')
const ora = require('ora')


module.exports = async (args, context) => {
    const {publishOnly} = args
    if (publishOnly === 'enabled') return context

    const spinner = ora('Merging develop into master...').start()

    try {
        const {currentDir} = args

        const git = SimpleGit(currentDir)
        await git.checkout('master')
        await git.pull('origin', 'master')
        await git.pull('origin', 'develop')
        await git.push('origin', 'master')

        spinner.succeed('Merged develop into master').stop()

        return context
    } catch (e) {
        spinner.fail(e.message).stop()

        throw e
    }
}

