const _validateArgs = require('./core/_validateArgs')
const isNodePackage = require('./scripts/is-node-package')
const isGit = require('./scripts/is-git')
const isDevelopBranch = require('./scripts/is-develop-branch')
const increaseVersion = require('./scripts/increase-version')
const commitNewVersion = require('./scripts/commit-new-version')
const checkNPMrc = require('./scripts/check-npmrc')
const npmPublish = require('./scripts/npm-publish')
const backToDevelop = require('./scripts/back-to-develop')


const _run = async (args) => {
    console.log('Start to run:', new Date())

    await isNodePackage(args)
    await isGit(args)
    await isDevelopBranch(args)
    await increaseVersion(args)
    await commitNewVersion(args)
    await checkNPMrc(args)
    await npmPublish(args)
    await backToDevelop(args)

    return true
}


module.exports = async (args) => {
    const vArgs = _validateArgs(args)

    return _run(vArgs)
}

