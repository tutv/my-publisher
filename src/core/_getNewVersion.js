const semver = require('semver')


module.exports = async (currentVersion, packageName) => {
    const validVersion = semver.valid(currentVersion)
    if (!validVersion) {
        throw new Error(`Current version is invalid. Current version: ${currentVersion}`)
    }

    return semver.inc(validVersion, 'patch')
}
