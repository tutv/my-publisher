const _showNPMrc = require('../core/_showNPMrc')


module.exports = async (args, context) => {
    const {publishOnly} = args
    if (publishOnly === 'enabled') return context

    const {currentDir} = args
    await _showNPMrc(currentDir)

    return context
}

