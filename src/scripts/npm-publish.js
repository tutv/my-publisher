const execa = require('execa')
const _copyGlobalNPMrc = require('../core/_copyGlobalNPMrc')
const _cleanNPMrc = require('../core/_cleanNPMrc')


module.exports = async (args, context) => {
    const {currentDir, access} = args

    const options = ['publish', currentDir, '--registry', 'https://registry.npmjs.org']
    if (access === 'public') {
        options.push('--access', 'public')
    }

    await _copyGlobalNPMrc(currentDir)
    const {stdout} = await execa('npm', options)
    console.log('NPM publish output:')
    console.log(stdout)

    await _cleanNPMrc(currentDir)

    return context
}

