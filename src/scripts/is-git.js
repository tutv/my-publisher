const SimpleGit = require('simple-git/promise')


module.exports = async (args, context) => {
    const {currentDir} = args

    const git = SimpleGit(currentDir)
    const isRepo = await git.checkIsRepo()

    if (!isRepo) {
        throw new Error('Your package is not a git folder.')
    }

    return context
}

