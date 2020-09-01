const SimpleGit = require('simple-git/promise')
const ora = require('ora')


module.exports = async (args, context) => {
    const spinner = ora('Creating a release tag...').start()

    try {
        const {currentDir, message} = args
        const git = SimpleGit(currentDir)

        const currentVersion = context.getValue('newVersion')
        const version = `release/v${currentVersion}`
        const rMessage = `Release: ${message}`

        await git.tag(['-a', version, '-m', rMessage])
        spinner.succeed(`Created a tag: ${version}`)

        await git.push('origin', version)
        spinner.succeed(`Pushed the tag: ${version}`).stop()
    } catch (e) {
        spinner.fail(e.message).stop()
    }

    return context
}

