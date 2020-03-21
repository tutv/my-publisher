module.exports = (args = {}) => {
    const {message, path} = args
    const currentPath = process.cwd()
    const vPath = path || currentPath

    return {
        message,
        currentDir: vPath,
    }
}

