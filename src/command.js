const _createContext = require('./core/_createContext')
const _validateArgs = require('./core/_validateArgs')
const isNodePackage = require('./scripts/is-node-package')
const isGit = require('./scripts/is-git')
const makeSureDevelopBranch = require('./scripts/make-sure-develop-branch')
const upToDAte = require('./scripts/up-to-date')
const increaseVersion = require('./scripts/increase-version')
const commitNewVersion = require('./scripts/commit-new-version')
const mergeIntoMaster = require('./scripts/mergeIntoMaster')
const createTag = require('./scripts/create-tag')
const hideNPMrc = require('./scripts/hide-npmrc')
const restoreNPMrc = require('./scripts/restore-npmrc')
const npmPublish = require('./scripts/npm-publish')
const backToDevelop = require('./scripts/back-to-develop')


const _run = async (args) => {
    const context = _createContext(args)

    const context1 = await isNodePackage(args, context)
    const context2 = await isGit(args, context1)
    const context3 = await makeSureDevelopBranch(args, context2)
    const context4 = await upToDAte(args, context3)
    const context5 = await increaseVersion(args, context4)
    const context6 = await commitNewVersion(args, context5)
    const context7 = await mergeIntoMaster(args, context6)
    const context8 = await createTag(args, context7)
    const context9 = await hideNPMrc(args, context8)
    const context10 = await npmPublish(args, context9)
    const context11 = await restoreNPMrc(args, context10)
    await backToDevelop(args, context11)

    return true
}


module.exports = async (args) => {
    const vArgs = _validateArgs(args)

    return _run(vArgs)
}

