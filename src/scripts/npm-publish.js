const execa = require('execa')


module.exports = async (args, context) => {
    const {currentDir} = args
    const {stdout} = await execa('npm', ['publish', currentDir])
    console.log(stdout)

    return context
}

