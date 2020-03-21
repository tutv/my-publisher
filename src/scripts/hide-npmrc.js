const _hideNPMrc = require('../core/_hideNPMrc')


module.exports = async (args, context) => {
    const {currentDir} = args
    await _hideNPMrc(currentDir)

    return context
}

