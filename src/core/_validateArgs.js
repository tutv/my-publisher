module.exports = (args = {}) => {
    const {message, path, access} = args
    const currentPath = process.cwd()
    const vPath = path || currentPath

    return {
        access,
        message: message || 'upgraded',
        currentDir: vPath,
    }
}

