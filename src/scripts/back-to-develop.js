const SimpleGit = require('simple-git/promise')


module.exports = async (args, context) => {
    const {publishOnly} = args
    if (publishOnly === 'enabled') return context

    const {currentDir} = args
    const git = SimpleGit(currentDir)

    await git.checkout('develop')

    return context
}

