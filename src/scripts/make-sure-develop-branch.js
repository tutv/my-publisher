const SimpleGit = require('simple-git/promise')


module.exports = async (args, context) => {
    const {currentDir} = args
    const git = SimpleGit(currentDir)

    const {current: currentBranch, all: allBranches} = await git.branch()
    if (currentBranch !== 'develop') {
        if (!allBranches || !allBranches.includes('develop')) {
            throw new Error('develop branch not found. Please create a develop branch before run command.')
        }

        await git.checkout('develop')
    }

    return context
}

