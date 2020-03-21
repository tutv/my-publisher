const _createContext = require('./core/_createContext')
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

    const context = _createContext(args)


    const context1 = await isNodePackage(args, context)
    const context2 = await isGit(args, context1)
    const context3 = await isDevelopBranch(args, context2)
    const context4 = await increaseVersion(args, context3)
    const context5 = await commitNewVersion(args, context4)
    const context6 = await checkNPMrc(args, context5)
    const context7 = await npmPublish(args, context6)
    await backToDevelop(args, context7)

    return true
}


module.exports = async (args) => {
    const vArgs = _validateArgs(args)

    return _run(vArgs)
}

