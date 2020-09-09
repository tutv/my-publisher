module.exports = (args = {}) => {
    const {message, path, access, release, 'publishOnly': publishOnly} = args
    const currentPath = process.cwd()
    const vPath = path || currentPath

    return {
        access,
        message: message || 'upgraded',
        currentDir: vPath,
        release,
        publishOnly,
    }
}

