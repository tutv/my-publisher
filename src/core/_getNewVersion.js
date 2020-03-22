const semver = require('semver')


const _autoIncrease = (version) => {
    const {minor, patch} = semver.parse(version)

    if (patch < 9) {
        return semver.inc(version, 'patch')
    }

    if (minor < 9) {
        return semver.inc(version, 'minor')
    }

    return semver.inc(version, 'major')
}

module.exports = async (currentVersion, type = '') => {
    const validVersion = semver.valid(currentVersion)
    if (!validVersion) {
        throw new Error(`Current version is invalid. Current version: ${currentVersion}`)
    }

    const _allowTypes = ['major', 'minor', 'patch']
    if (!_allowTypes.includes(type)) {
        return _autoIncrease(validVersion)
    }

    return semver.inc(validVersion, type)
}
