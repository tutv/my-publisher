const execa = require('execa')
const _copyGlobalNPMrc = require('../core/_copyGlobalNPMrc')
const _cleanNPMrc = require('../core/_cleanNPMrc')
const ora = require('ora')


module.exports = async (args, context) => {
    const {publishOnly} = args

    const spinner = ora('Publishing...').start()

    try {
        const {currentDir, access} = args

        const options = ['publish', currentDir, '--registry', 'https://registry.npmjs.org']
        if (access === 'public') {
            options.push('--access', 'public')
        }

        if (publishOnly !== 'enabled') {
            await _copyGlobalNPMrc(currentDir)
        }

        const {stdout} = await execa('npm', options)
        spinner.succeed('NPM publish output:')
        spinner.succeed(stdout).stop()

        await _cleanNPMrc(currentDir)
    } catch (e) {
        spinner.fail(e.message).stop()
    }


    return context
}

