const SimpleGit = require('simple-git/promise')


module.exports = async (args, context) => {
    const {currentDir} = args
    const git = SimpleGit(currentDir)

    console.log('Checkout master.')
    await git.checkout('master')
    await git.pull('origin', 'master')
    await git.pull('origin', 'develop')
    await git.push('origin', 'master')

    return context
}

