const semver = require('semver')


module.exports = async (currentVersion, packageName) => {
    console.log('current:', currentVersion)
    const validVersion = semver.valid(currentVersion)
    if (!validVersion) {
        throw new Error(`Current version is invalid. Current version: ${currentVersion}`)
    }

    return semver.inc(validVersion, 'patch')
}
