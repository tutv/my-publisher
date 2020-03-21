const SimpleGit = require('simple-git/promise')


module.exports = async (args, context) => {
    const {currentDir} = args
    const git = SimpleGit(currentDir)

    await git.checkout('develop')

    return context
}

