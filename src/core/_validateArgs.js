module.exports = (args = {}) => {
    const {message} = args
    const path = process.cwd()

    return {
        message,
        currentDir: path,
    }
}

