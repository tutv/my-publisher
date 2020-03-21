const isDirectory = require('../helpers/is-directory')


module.exports = async (args) => {
    const {currentDir} = args

    await isDirectory(currentDir)
}

