const path = require('path')


module.exports = (currentDir) => {
    return path.join(currentDir, 'package.json')
}

