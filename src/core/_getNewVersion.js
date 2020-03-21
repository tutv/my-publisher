const semver = require('semver')


module.exports = async (currentVersion) => {
    const validVersion = semver.valid(currentVersion)
    if (!validVersion) {
        throw new Error(`Current version is invalid. Current version: ${currentVersion}`)
    }

    const {major, minor, patch} = semver.parse(validVersion)

    if (patch < 9) {
        return semver.inc(validVersion, 'patch')
    }

    if (minor < 9) {
        return semver.inc(`${major}.${minor}.0`, 'minor')
    }

    return semver.inc(`${major}.0.0`, 'major')
}
