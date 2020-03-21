const path = require('path')


module.exports = (currentDir, fileName = '') => {
    return path.join(currentDir, fileName)
}

